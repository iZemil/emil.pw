import { rootApi } from './root';

export const authApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		signUp: builder.mutation<any, any>({
			query: (body) => ({
				url: `sign-up`,
				method: 'POST',
				body,
			}),
		}),
		login: builder.mutation<any, any>({
			query: (body) => ({
				url: `login`,
				method: 'POST',
				body,
			}),
		}),
		refresh: builder.mutation<any, any>({
			query: (body) => ({
				url: `refresh`,
				method: 'POST',
				body,
			}),
		}),
		logout: builder.mutation<void, void>({
			query: () => ({
				url: `logout`,
				method: 'POST',
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useLoginMutation, useSignUpMutation, useLogoutMutation } = authApi;
