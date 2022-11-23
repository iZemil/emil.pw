import { Button } from 'react-aui';
import styled from 'styled-components';

export const S = {
	$: styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
	`,
	Menu: {
		$: styled.div`
			display: flex;
			align-items: center;
		`,
		Item: {
			$: styled(Button).attrs({ type: 'text' })``,
		},
	},
};
