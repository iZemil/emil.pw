import * as React from 'react';
import { AUIProvider, GlobalStyles, IAUI } from 'react-aui';

const theme: IAUI = {
	mode: 'dark',
	colors: {
		// good color palette:
		// https://www.theverge.com/23438982/hp-victus-15-gaming-laptop-review-specs-price
		main: '#3cffd0',
		text: '#ffffff',
		bg: '#202020',

		red: '#e1233c',
		green: '#00e78c',
		blue: '#03a9f4',
		orange: '#c99400',

		white: '#ffffff',
		black: '#000000',
		grey: '#888888',
	},
	paddings: {
		small: 5,
		medium: 10,
		large: 20,
	},
	borderRadius: 4,
	globalStyles: `
		h1, h2, h3, h4 {
			margin: 0;
		}
	`,
};

enum ETech {
	postgres = 'postgres',
	docker = 'docker',
	typescript = 'typescript',
	nodejs = 'nodejs',
	python = 'python',
	mongodb = 'mongodb',
}

interface ICV {
	contacts: { name: string; value: string }[];
	hobbies: string[];
	career: { title: string; company: string; from: Date; to: Date; achievments: string[]; stack: ETech }[];
}

const CV: ICV = {
	contacts: [
		{ name: 'email', value: '3zemil🐶gmail.com' },
		{ name: 'linkedin', value: '' },
	],
	career: [],
	hobbies: ['🥋 brazilian jiu-jitsu', '🍳 cooking', '🦄 own projects coding'],
};

export function Index() {
	return (
		<AUIProvider themes={[theme]}>
			<GlobalStyles />

			{/* @docs: https://nx.dev/packages/next */}
			<img src="emil.png" alt="emil.pw" width={200} />
		</AUIProvider>
	);
}

export default Index;
