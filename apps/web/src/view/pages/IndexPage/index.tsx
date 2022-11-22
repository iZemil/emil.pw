import { useSelector } from 'react-redux';

import { Route } from '@web/routes';
import { selectAuth } from '@web/store';

import { LandingPage } from './LandingPage';
import { LoggedIndexPage } from './LoggedIndexPage';

export default function IndexPage(page: Route): JSX.Element {
	const isAuth = useSelector(selectAuth);

	return isAuth ? <LoggedIndexPage /> : <LandingPage />;
}
