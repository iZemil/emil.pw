import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { authActions } from '@web/store';

export const baseQueryWithReauth = (baseUrl: string): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
	const baseQuery = (baseUrl: string) =>
		fetchBaseQuery({
			baseUrl,
			credentials: 'include',
		});

	// @docs: https://github.com/DirtyHairy/async-mutex
	const mutex = new Mutex();

	return async (args, api, extraOptions) => {
		/** wait until the mutex is available without locking it */
		await mutex.waitForUnlock();

		// TODO#0: possible existing problem - multiple 401 requests - should be one 401 request, refresh, then others
		// login -> delete auth token -> see multiple 401 requests...
		let result = await baseQuery(baseUrl)(args, api, extraOptions);
		if (result.error && result.error.status === 401) {
			if (!mutex.isLocked()) {
				const release = await mutex.acquire();

				try {
					const refreshResponse = await baseQuery(baseUrl)(
						{
							url: 'auth/refresh',
							method: 'POST',
						},
						api,
						extraOptions
					);
					const isRefreshed = Boolean(
						'data' in refreshResponse && (refreshResponse.data as { id: string }).id
					);

					if (isRefreshed) {
						/** retry the initial query */
						result = await baseQuery(baseUrl)(args, api, extraOptions);
					} else {
						api.dispatch(authActions.logout());
					}
				} finally {
					/** release must be called once the mutex should be released again */
					release();
				}
			} else {
				/** wait until the mutex is available without locking it */
				await mutex.waitForUnlock();

				result = await baseQuery(baseUrl)(args, api, extraOptions);
			}
		}

		return result;
	};
};
