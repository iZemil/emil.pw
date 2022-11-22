import React from 'react';
import { PageContent } from 'react-aui';

import { Page } from '../../../components';

import { S } from './Styled';

export const LandingPage = () => {
	return (
		<Page>
			<PageContent>
				<S.Title.$>emil.pw</S.Title.$>
			</PageContent>
		</Page>
	);
};
