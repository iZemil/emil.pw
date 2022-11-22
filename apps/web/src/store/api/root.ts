import { createApi } from '@reduxjs/toolkit/query/react';

import { EMainApiTag, SERVER_URL, baseQueryWithReauth } from './utils';

export const rootApi = createApi({
	baseQuery: baseQueryWithReauth(`${SERVER_URL}/api`),
	endpoints: () => ({}),
	reducerPath: 'rootApi',
	tagTypes: Object.values(EMainApiTag),
});
