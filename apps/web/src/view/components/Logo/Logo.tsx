import { TColors, TSize } from 'react-aui';

import { getRoute } from '@web/routes';
import { Environment } from '@shared';

import S from './Styled';

interface IProps {
	color?: TColors;
	size?: TSize;
	blank?: boolean;
}

export const Logo = ({ color, size, blank, ...rest }: IProps) => {
	return (
		<S.$ type="text" to={getRoute('home').path()} color={color} size={size} blank={blank} {...rest}>
			<S.Title.$>bllng</S.Title.$>

			{Environment.is('DEV') && <S.Desc.$>Testnet</S.Desc.$>}
			{Environment.is('PROD') && <S.Desc.$>.com</S.Desc.$>}
		</S.$>
	);
};
