import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootApi } from './api/root';
import { authSlice, settingsSlice } from './features';
import { rtkErrorMiddleware, tailHandler } from './middlewares';

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[settingsSlice.name]: settingsSlice.reducer,
	[rootApi.reducerPath]: rootApi.reducer,
});

export const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: [rootApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const tailMiddleware = tailHandler(persistConfig);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		const middlewares = getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(
				rootApi.middleware,
				// пока отключил socketMiddleware
				rtkErrorMiddleware
			)
			.concat(tailMiddleware);

		const withLogger = false;
		if (withLogger) {
			// @docs: https://github.com/LogRocket/redux-logger
			middlewares.push(logger);
		}

		return middlewares;
	},
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
