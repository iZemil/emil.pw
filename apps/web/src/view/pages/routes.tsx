import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const IndexPage = lazy(() => import('./IndexPage'));

export const ROUTE_KEYS = ['home', 'notfound'] as const;

export type TRouteKeys = typeof ROUTE_KEYS[number];
export class Route {
	public readonly key: TRouteKeys;
	public readonly path: (...args: string[]) => string;
	public readonly withAuth: boolean;
	public readonly component: (props: Route) => React.ReactNode;
	public readonly index?: boolean;

	constructor({ key, path, withAuth, component, index }: Route) {
		this.key = key;
		this.path = typeof path === 'string' ? () => path : path;
		this.withAuth = withAuth;
		this.component = component;

		if (index) {
			this.index = index;
		}
	}
}

export const routes: Route[] = [
	new Route({
		key: 'home',
		withAuth: false,
		path: () => '/',
		index: true,
		component: (props: Route) => <IndexPage {...props} />,
	}),
	new Route({
		key: 'notfound',
		withAuth: false,
		path: () => '*',
		component: () => <Navigate to="/" />,
	}),
];

const routeByKey = new Map(routes.map((route) => [route.key, route]));

export const getRoute = (key: TRouteKeys): Route => routeByKey.get(key) as Route;
