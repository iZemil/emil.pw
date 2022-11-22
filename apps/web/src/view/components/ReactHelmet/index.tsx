import { Helmet } from 'react-helmet-async';

import { YaMetrics } from './YaMetrics';

export { HelmetProvider } from 'react-helmet-async';

export const ReactHelmet = () => {
	return (
		<>
			<Helmet prioritizeSeoTags>{/* Dynamic head tags */}</Helmet>

			<YaMetrics id="90990110" />
		</>
	);
};
