import React from 'react';
import { PageContent } from 'react-aui';

import { Menu, Page } from '@web/components';

import { S } from './Styled';

export const LandingPage = () => {
	return (
		<Page>
			<Menu />
			<PageContent>
				<S.Title.$>emil.pw</S.Title.$>
			</PageContent>
		</Page>
	);
};
