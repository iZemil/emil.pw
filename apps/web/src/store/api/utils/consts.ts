import { Environment } from '@shared';

export enum EMainApiTag {}

export const SERVER_URL =
	(process.env['NX_SERVER_URL'] as string) ||
	(Environment.is('PROD') ? window.location.origin : 'http://localhost:8080');
