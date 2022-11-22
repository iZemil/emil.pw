import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSettings: (state) => {
			return state;
		},
	},
});

export const settingsActions = settingsSlice.actions;
