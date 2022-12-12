// https://github.com/martpie/next-transpile-modules#readme
const withTM = require('next-transpile-modules')(['react-aui']); // pass the modules you would like to see transpiled
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: false,
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};

module.exports = withTM(withNx(nextConfig));
