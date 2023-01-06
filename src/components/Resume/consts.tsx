import { differenceInYears } from 'date-fns';

export enum ETech {
	docker = 'docker',
	gitlabci = 'gitlab ci',
	github_actions = 'github actions',
	git = 'git',
	aws = 'aws',
	linux = 'linux',

	python = 'python',
	django = 'django',
	flask = 'flask',
	sqlalchemy = 'sqlalchemy',

	dom_api = 'dom api',
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
	redis = 'redis',
	kafka = 'kafka',

	reactjs = 'reactjs',
	redux = 'redux',
	mobx = 'mobx',
	mobx_state_tree = 'mobx state tree',
	antd = 'antd',
	materialui = 'material ui',
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
	role: string;
	company: string;
	from: Date;
	to: Date;
	achievements: string[];
	stack: ETech[];
}

interface IContact {
	name: string;
	value: string;
}

export interface ICV {
	title: string;
	description: string;
	contacts: IContact[];
	stack: ETech[];
	hobbies: string[];
	experience: IJob[];
}

const START_DATE = new Date('2015 Jan');
export const DATA: ICV = {
	title: `Full-Stack Developer<br />Emil Zaripov`,
	description: `Senior Full-Stack Developer with ${differenceInYears(
		Date.now(),
		START_DATE
	)}+ years of experience.<br />A strong background with both frontend and backend sides, and able to mentor junior developers.<br />Seeking a remote frontend/backend developer role where I can use my skills to make a positive impact.`,
	contacts: [
		{ name: 'LinkedIn', value: 'https://www.linkedin.com/in/zemil' },
		{ name: 'Email', value: 'elzyggg@gmail.com' },
	],
	stack: [
		ETech.typescript,
		ETech.nodejs,
		ETech.nestjs,
		ETech.typeorm,
		ETech.postgres,
		ETech.docker,
		ETech.reactjs,
		ETech.redux,
		ETech.web3,
	],
	experience: [
		{
			role: 'Backend Developer',
			company: 'PWC (prev IBM Team) | Geological App',
			to: new Date('2022 Apr'),
			from: new Date('2021 Sep'),
			achievements: [
				'Developed graphql API to use geological analytics operations',
				'Developed and maintained a microservice architecture for 4 services',
				'Collaborated with analytics and product managers to develop new app features',
				'Reviewed the backend development team',
				'Led javascript technical interviews',
			],
			stack: [ETech.typescript, ETech.nodejs, ETech.nestjs, ETech.graphql, ETech.mongoose],
		},

		{
			role: 'Tech Lead Developer',
			company: 'Sparkme.club | Video Chat',
			to: new Date('2021 Sep'),
			from: new Date('2021 Jan'),
			achievements: [
				'Developed and maintained a web application from Zero to MVP',
				'Planned tech issues for the team and worked on the spints planning',
				'Mentored 2 juniour frontend developers on team',
				'Led product planning with CEO',
			],
			stack: [
				ETech.typescript,
				ETech.expressjs,
				ETech.socketio,
				ETech.reactjs,
				ETech.redux,
				ETech.materialui,
				ETech.webrtc,
				ETech.mongoose,
				ETech.redis,
			],
		},
		{
			role: 'Backend Developer',
			company: 'IBM | Drilling Activities App',
			to: new Date('2021 Jan'),
			from: new Date('2019 Oct'),
			achievements: [
				'Helped to solve issues for minimizing operational costs for the drilling company',
				'Developed microservice gateway to work with Primavera system',
				'Developed npm packages for company usage',
				'Developed a gateway (frontend - python analytics)',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.typeorm,
				ETech.postgres,
				ETech.python,
				ETech.flask,
				ETech.sqlalchemy,
			],
		},
		{
			role: 'Team Lead Developer',
			company: 'Allbebet | Crypto Gambling Platform',
			to: new Date('2019 Aug'),
			from: new Date('2019 Mar'),
			achievements: [
				'Developed and maintained a web application from Zero to MVP',
				'Planned backend and blockchain issues for the team',
				'Integrated blockchain for web application',
			],
			stack: [ETech.nodejs, ETech.expressjs, ETech.mongoose, ETech.reactjs, ETech.mobx, ETech.antd],
		},
		{
			role: 'Frontend Developer',
			company: 'RobotVera | AI Recruitment',
			to: new Date('2019 Aug'),
			from: new Date('2018 Jul'),
			achievements: [
				'Improved the performance of a frontend side of web application',
				'Developed own usage content CMS',
				'Estimated tech tasks as part of a team',
			],
			stack: [ETech.reactjs, ETech.mobx, ETech.mobx_state_tree, ETech.antd],
		},
		{
			role: 'Frontend Developer',
			company: 'Freelance/Dextra/Unit6',
			to: new Date('2018 Jun'),
			from: START_DATE,
			achievements: [
				'Developed huge amount of web page markups with cross platform support',
				'Developed wordpress applications for my freelance clients',
				'Developed several Jira Plugins',
				'Supported current web solutions',
			],
			stack: [ETech.reactjs, ETech.redux, ETech.wordpress, ETech.scss, ETech.pug, ETech.dom_api],
		},
	],
	hobbies: ['🦄 Developing my own projects', '🥋 Brazilian jiu-jitsu', '🍳 Cooking'],
};
