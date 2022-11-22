import { Button, color, getFontSize, padding } from 'react-aui';
import styled from 'styled-components';

// font to svg: https://danmarshall.github.io/google-font-to-svg-path/
// Comfortaa font
// import { ReactComponent as Svg } from './bllng.svg';

const S = {
	$: styled(Button)`
		font-family: 'Comfortaa', cursive;
		gap: ${padding('small')};

		@media screen and (max-width: 480px) {
			padding: 0;
		}
	`,
	Title: {
		$: styled.div`
			font-weight: bold;
			font-size: 24px;
		`,
	},
	Desc: {
		$: styled.div`
			font-size: ${getFontSize('small')}px;
			font-weight: bold;
			margin-top: auto;
			color: ${color('text')};
		`,
	},
};

export default S;
