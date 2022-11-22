import { Suspense, useEffect } from 'react';
import { AUIProvider } from 'react-aui';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { theme } from '@ui';

import { persistor, store } from './store';
import { HelmetProvider, ReactHelmet } from './view/components';
import { Routing } from './view/pages/routing';

// const ReactGA = lazy(() => import('./view/components/ReactGA'));

const onStart = () => {
	console.info(`version: ${process.env.NX_VERSION}`);
};

export function App() {
	useEffect(() => {
		onStart();
	}, []);

	return (
		<HelmetProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AUIProvider themes={[theme]}>
						<ReactHelmet />

						<Suspense fallback={null}>
							<Routing />
							{/* <ReactGA /> */}
						</Suspense>
					</AUIProvider>
				</PersistGate>
			</ReduxProvider>
		</HelmetProvider>
	);
}
