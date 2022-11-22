import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit';

/**
 * Обработка RTK
 */
export const rtkErrorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		// console.warn('We got a rejected action!', action);
		// toast.warn({ title: 'Async error!', message: action.error.data.message })
	}

	return next(action);
};
