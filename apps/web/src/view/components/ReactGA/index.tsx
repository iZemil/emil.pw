import { useEffect } from 'react';
// @docs: https://www.npmjs.com/package/react-ga4
import ga4 from 'react-ga4';

export default function ReactGA() {
	useEffect(() => {
		ga4.initialize('G-XEGBJ1412R');
	}, []);

	return <div />;
}
