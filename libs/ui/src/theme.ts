import { IAUI } from 'react-aui';

export const theme: IAUI = {
	mode: 'dark',
	colors: {
		// good color palette:
		// https://www.theverge.com/23438982/hp-victus-15-gaming-laptop-review-specs-price
		main: '#3cffd0',
		text: '#ffffff',
		bg: '#202020',

		red: '#e1233c',
		green: '#00e78c',
		blue: '#03a9f4',
		orange: '#c99400',

		white: '#ffffff',
		black: '#000000',
		grey: '#888888',
	},
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
	borderRadius: 4,
	globalStyles: `
		h1, h2, h3, h4 {
			margin: 0;
		}

		body {
			font-family: 'Montserrat';
		}
	`,
};
