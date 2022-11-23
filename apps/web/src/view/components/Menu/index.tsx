import { Logo } from '../Logo';

import { S } from './Styled';

export const Menu = () => {
	return (
		<S.$>
			<Logo />

			<S.Menu.$>
				<S.Menu.Item.$>Write me</S.Menu.Item.$>
				<S.Menu.Item.$>CV</S.Menu.Item.$>
				<S.Menu.Item.$>Projects</S.Menu.Item.$>
			</S.Menu.$>
		</S.$>
	);
};
