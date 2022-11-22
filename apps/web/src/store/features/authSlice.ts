import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
	isAuth: boolean;
	userId: string | undefined;
}

const initialState: IAuthState = {
	isAuth: false,
	userId: undefined,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, { payload: { userId } }: PayloadAction<{ userId: string }>) => {
			state.isAuth = true;
			state.userId = userId;
		},
		logout: () => {
			localStorage.clear();

			return initialState;
		},
	},
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
