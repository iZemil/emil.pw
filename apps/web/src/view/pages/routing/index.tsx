import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routes } from '@web/routes';
import { selectAuth } from '@web/store';

import { ProtectedRoute } from './ProtectedRoute';

export const Routing = () => {
	const isAuth = useSelector(selectAuth);

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((it) =>
					it.withAuth ? (
						<Route
							key={it.key}
							path={it.path()}
							index={it.index}
							element={
								<ProtectedRoute isAuth={Boolean(isAuth)} element={it.component(it) as JSX.Element} />
							}
						/>
					) : (
						<Route key={it.key} path={it.path()} index={it.index} element={it.component(it)} />
					)
				)}
			</Routes>
		</BrowserRouter>
	);
};
