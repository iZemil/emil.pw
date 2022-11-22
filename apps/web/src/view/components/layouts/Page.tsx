import { Page as UIPage, padding } from 'react-aui';
import styled from 'styled-components';

interface IProps {
	children: React.ReactNode;
	withoutMenu?: boolean;
	style?: React.CSSProperties;
}

const S = {
	$: styled(UIPage)`
		padding-top: ${padding('medium')};
		padding-bottom: ${padding('large')};
	`,
};

export const Page = ({ children, withoutMenu, style }: IProps) => {
	return (
		<S.$ withoutMenu={Boolean(withoutMenu)} style={style}>
			{children}
		</S.$>
	);
};
