import { RootState } from './index';

export const selectAuth = (state: RootState) => state.auth.isAuth;
