import { differenceInYears } from 'date-fns';

import { ETech, ICV } from './types';

const START_DATE = new Date('2015 Jan');
export const DATA: ICV = {
	title: `Emil Zaripov`,
	description: `Senior Full Stack Developer with ${differenceInYears(
		Date.now(),
		START_DATE
	)}+ years of experience. I’m looking for a senior backend role remotely.`,
	pdfFilename: 'zaripov-emil.pdf',
	contacts: [
		{ name: 'linkedin', value: 'https://www.linkedin.com/in/zemil' },
		{ name: 'email', value: 'elzyggg@gmail.com' },
	],
	stack: [
		ETech.typescript,
		ETech.nodejs,
		ETech.nestjs,
		ETech.typeorm,
		ETech.postgres,
		ETech.docker,
		ETech.nx_monorepo,
		ETech.reactjs,
		ETech.redux,
	],
	career: [
		{
			title: 'Backend Developer',
			company: 'PWC (prev IBM Team)',
			to: new Date('2022 Apr'),
			from: new Date('2021 Sep'),
			achievements: [
				'developed a gateway between frontend and analytics sides of the geological application',
				'led javascript technical interviews',
			],
			stack: [ETech.typescript, ETech.nodejs, ETech.nestjs, ETech.graphql, ETech.mongoose],
		},

		{
			title: 'Tech Lead Developer',
			company: 'Sparkme.club',
			to: new Date('2021 Aug'),
			from: new Date('2021 Apr'),
			achievements: [
				'developed a video game chat web application from Zero to MVP',
				'planned tech issues for the team',
				'led product planning with CEO',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.expressjs,
				ETech.socketio,
				ETech.reactjs,
				ETech.redux,
				ETech.webrtc,
				ETech.mongoose,
			],
		},
		{
			title: 'Backend Developer',
			company: 'IBM',
			to: new Date('2021 Jan'),
			from: new Date('2019 Oct'),
			achievements: [
				'developed a gateway (frontend - python analytics)',
				'solved backend issues about minimizing operational costs for the drilling company',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.typeorm,
				ETech.postgres,
				ETech.postgres,
				ETech.python,
				ETech.flask,
				ETech.sqlalchemy,
			],
		},
		{
			title: 'Team Lead Developer',
			company: 'Allbebet',
			to: new Date('2019 Aug'),
			from: new Date('2019 Mar'),
			achievements: [
				'developed Gambling platform from Zero to MVP',
				'planned backend and blockchain issues for the team',
				'integrated blockchain for web application',
			],
			stack: [ETech.nodejs, ETech.expressjs, ETech.mongoose, ETech.reactjs, ETech.mobx, ETech.antd],
		},
		{
			title: 'Frontend Developer',
			company: 'RobotVera',
			to: new Date('2019 Aug'),
			from: new Date('2018 Jul'),
			achievements: [
				'developed frontend side of AI Recruitment web application',
				'estimated tech tasks as part of a team',
			],
			stack: [ETech.reactjs, ETech.mobx, ETech.mobx_state_tree, ETech.antd],
		},
		{
			title: 'Frontend Developer',
			company: 'Freelance/Dextra/Unit6',
			to: new Date('2018 Jul'),
			from: START_DATE,
			achievements: [
				'developed several Jira Plugins',
				'worked with a designer to create landing pages',
				'supported current web solutions',
				'made markup for multiple websites with cross platform support',
				'developed wordpress applications for my freelance clients',
			],
			stack: [ETech.reactjs, ETech.redux, ETech.wordpress, ETech.scss, ETech.pug, ETech.js_dom_api],
		},
	],
	hobbies: ['🥋 brazilian jiu-jitsu', '🍳 cooking', '🦄 own projects coding'],
};
