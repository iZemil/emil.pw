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
	express = 'express',
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

const START_DATE = new Date('2016 Jan');
export const DATA: ICV = {
	title: `NodeJS Developer<br />Emil Zaripov`,
	description: `Senior NodeJS Developer with ${differenceInYears(
		Date.now(),
		START_DATE
	)}+ years of experience.<br />A strong background with both frontend and backend sides, and able to mentor junior developers.<br />
	<strong>Seeking a Remote NodeJS Backend Role</strong>`,
	contacts: [
		{ name: 'LinkedIn', value: 'https://www.linkedin.com/in/zemil' },
		{ name: 'Email', value: 'hi@emil.pw' },
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
			company: 'IBM – Geological App',
			to: new Date('2022 Nov 30'), // 22 apr
			from: new Date('2021 Mar'), // Sep
			achievements: [
				'Developed graphql API to use geological analytics operations',
				'Developed and maintained a microservice architecture for 4 services',
				'Collaborated with analytics and product managers to develop new app features',
				'Reviewed the backend development team',
				'Led javascript technical interviews',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.graphql,
				ETech.mongoose,
				ETech.python,
				ETech.jest,
			],
		},

		{
			role: 'Tech Lead Developer',
			company: 'Sparkme.club – Video Chat',
			to: new Date('2021 Apr 30'), // Sep
			from: new Date('2021 Jan'),
			achievements: [
				'Developed and maintained a web application from Zero to MVP',
				'Planned tech issues for the team and worked on the sprints planning',
				'Mentored 2 juniour frontend developers on team',
				'Reviewed all team code',
			],
			stack: [
				ETech.typescript,
				ETech.express,
				ETech.socketio,
				ETech.reactjs,
				ETech.redux,
				ETech.webrtc,
				ETech.mongoose,
				ETech.redis,
				ETech.jest,
			],
		},
		{
			role: 'Backend Developer',
			company: 'IBM – Drilling Activities App',
			to: new Date('2021 Jan'),
			from: new Date('2019 Oct'),
			achievements: [
				'Helped to solve issues for minimizing operational costs for the drilling company',
				'Developed and maintained a microservice gateway to work with Primavera system',
				'Maintained NPM packages for company development processes',
				'Developed a REST API gateway between frontend and python analytics',
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
			company: 'Allbebet – Crypto Gambling Platform',
			to: new Date('2019 Aug'),
			from: new Date('2019 Mar'),
			achievements: [
				'Developed and maintained a web application from Zero to MVP',
				'Planned backend and blockchain issues for the team',
				'Integrated blockchain for web application',
			],
			stack: [ETech.nodejs, ETech.express, ETech.mongoose, ETech.reactjs, ETech.mobx, ETech.antd],
		},
		{
			role: 'Frontend Developer',
			company: 'RobotVera – AI Recruitment',
			to: new Date('2019 Aug'),
			from: new Date('2018 Jul'),
			achievements: [
				'Improved the performance of a frontend side of web application',
				'Developed and maintained a CMS for company usage',
				'Estimated tech tasks as a part of a team',
				'Refactored big codebase of legacy HTML to React development',
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
				'Developed Wordpress applications for my freelance clients',
				'Developed and maintained several Jira Plugins',
				'Maintained and improved perfomance of current web solutions',
			],
			stack: [ETech.reactjs, ETech.redux, ETech.wordpress, ETech.scss, ETech.pug, ETech.dom_api],
		},
	],
	hobbies: ['🦄 Developing side projects', '🥋 Brazilian jiu-jitsu', '🍳 Cooking'],
};
