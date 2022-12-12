export enum ETech {
	docker = 'docker',
	gitlabci = 'gitlab ci',
	github_actions = 'github actions',

	python = 'python',
	django = 'django',
	flask = 'flask',
	sqlalchemy = 'sqlalchemy',

	js_dom_api = 'javascript dom api',
	typescript = 'typescript',
	nodejs = 'nodejs',
	nestjs = 'nestjs',
	expressjs = 'expressjs',
	socketio = 'socketio',
	graphql = 'graphql',

	postgres = 'postgres',
	typeorm = 'typeorm',
	mongodb = 'mongodb',
	mongoose = 'mongoose',

	reactjs = 'reactjs',
	redux = 'redux',
	mobx = 'mobx',
	mobx_state_tree = 'mobx state tree',
	antd = 'antd',
	webrtc = 'webrtc',
	html = 'html',
	pug = 'pug',
	scss = 'scss',

	wordpress = 'wordpress',

	chrome_extensions = 'chrome extensions',

	telegram_bots = 'telegram bots',

	nx_monorepo = 'nx monorepo',

	phaser3 = 'phaser 3',
	cordova = 'cordova',
	react_native = 'react native',

	web3 = 'web3',
	ethersjs = 'ethersjs',

	unit_tests = 'unit tests',
	integration_tests = 'integration tests',
	jest = 'jest',
}

export interface IJob {
	title: string;
	company: string;
	from: Date;
	to: Date;
	achievements: string[];
	stack: ETech[];
}

export interface IContact {
	name: string;
	value: string;
}

export interface ICV {
	pdfFilename: string;
	title: string;
	description: string;
	contacts: IContact[];
	stack: ETech[];
	hobbies: string[];
	career: IJob[];
}
