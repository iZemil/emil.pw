import React from 'react';
import { PageContent } from 'react-aui';

import { Page } from '../../../components';

export const LandingPage = () => {
	return (
		<Page
			style={{
				background: 'linear-gradient(#202020 0%, #3a3a3a 100%)',
			}}
		>
			<PageContent style={{ zIndex: 1 }}>Home</PageContent>
		</Page>
	);
};
