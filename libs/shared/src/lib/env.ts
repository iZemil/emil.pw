const ENVS = {
	DEV: 'development',
	TEST: 'test',
	PROD: 'production',
} as const;

type EnvKey = keyof typeof ENVS;
type EnvValue = typeof ENVS[EnvKey];

export class Environment {
	public static DEV = ENVS.DEV;
	public static PROD = ENVS.PROD;
	public static TEST = ENVS.TEST;

	public static is(envKey: EnvKey): boolean {
		return this.value === Environment[envKey];
	}

	public static get value(): EnvValue {
		const env = process.env.NODE_ENV as EnvValue;

		if (![...Object.values(ENVS)].includes(env)) {
			throw new Error(`Undefined NODE_ENV: ${env}`);
		}

		return env;
	}
}
