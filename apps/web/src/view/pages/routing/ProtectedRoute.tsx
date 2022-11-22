import { Navigate } from 'react-router-dom';

interface IProps {
	isAuth: boolean;
	element: JSX.Element;
}

export const ProtectedRoute = ({ isAuth, element }: IProps): JSX.Element | null => {
	if (!isAuth) {
		return <Navigate to="login" replace />;
	}

	return element;
};
