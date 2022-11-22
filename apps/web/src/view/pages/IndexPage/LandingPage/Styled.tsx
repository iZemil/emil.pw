import { color } from 'react-aui';
import styled from 'styled-components';

export const S = {
	Title: {
		$: styled.div`
			color: ${color('main')};
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 40px;
			cursor: default;
		`,
	},
};
