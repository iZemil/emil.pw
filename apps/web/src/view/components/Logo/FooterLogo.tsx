import { padding } from 'react-aui';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectAuth } from '@web/store';

import { Logo } from './Logo';

const S = {
	$: styled.div`
		width: 100%;
		padding: ${padding('small')};
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 0;
	`,
};

interface IProps {
	blank?: boolean;
}

export const FooterLogo = ({ blank = true, ...css }: IProps) => {
	const isAuth = useSelector(selectAuth);

	return (
		<S.$ {...css}>
			<Logo color="white" size="small" blank={!isAuth} />
		</S.$>
	);
};
