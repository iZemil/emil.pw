import { Action, Middleware } from 'redux';
import { PersistConfig } from 'redux-persist';
import purgeStoredState from 'redux-persist/es/purgeStoredState';

import { authActions } from '@web/store';

/**
 * Возвращает Middleware для обработки в конце цепочки
 */
// @docs: https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
export const tailHandler =
	(persistConfig: PersistConfig<unknown>): Middleware =>
	(storeApi) =>
	(next) =>
	(action: Action) => {
		if (action.type === authActions.logout.type) {
			purgeStoredState(persistConfig);
		}

		next(action);
	};
