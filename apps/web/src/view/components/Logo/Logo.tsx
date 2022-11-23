import { TColors, TSize } from 'react-aui';

import { getRoute } from '@web/routes';

import S from './Styled';

interface IProps {
	color?: TColors;
	size?: TSize;
	blank?: boolean;
}

export const Logo = ({ color, size, blank, ...rest }: IProps) => {
	return (
		<S.$ type="text" to={getRoute('home').path()} color={color} size={size} blank={blank} {...rest}>
			<S.Title.$>emil</S.Title.$>

			{/* <S.Desc.$>.pw</S.Desc.$> */}
		</S.$>
	);
};
