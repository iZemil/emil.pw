// https://redux-toolkit.js.org/rtk-query/usage-with-typescript
/**
 * Ошибка при запросе к серверу
 */
type TNestError = {
	data: {
		error: string;
		message: string | string[];
		statusCode: number;
	};
	status: number;
};

export function isNestError(error: unknown): error is TNestError {
	return typeof error === 'object' && error !== null && 'status' in error && 'data' in error;
}
