import { differenceInYears } from 'date-fns';

export enum ETech {
	// Common core
	javascript = 'Javascript',
	typescript = 'Typescript',
	nodejs = 'NodeJS',
	graphql = 'GraphQL',
	socketio = 'SocketIO',
	python = 'Python',

	// Backend
	nestjs = 'NestJS',
	express = 'ExpressJS',
	postgres = 'PostgreSQL',
	typeorm = 'TypeORM',
	mongodb = 'MongoDB',
	mongoose = 'Mongoose',
	django = 'Django',
	flask = 'Flask',
	sqlalchemy = 'SQLAlchemy',
	swagger = 'Swagger',

	// Frontend
	reactjs = 'ReactJS',
	redux = 'ReduxJS',
	mobx = 'Mobx',
	mobx_state_tree = 'Mobx State Tree',
	antd = 'AntD',
	materialui = 'Material UI',
	webrtc = 'WebRTC',
	web3 = 'Web3',
	ethersjs = 'EthersJS',
	dom_api = 'DOM API',
	html = 'HTML',
	pug = 'PUG',
	scss = 'SCSS',
	styled = 'Styled Components',

	// CI
	docker = 'Docker',
	gitlabci = 'Gitlab CI',
	git = 'git',
	aws = 'AWS',
	linux = 'Linux',
	nx_monorepo = 'NX Monorepo',
	unit_tests = 'Unit Tests',
	jest = 'Jest',
	redis = 'Redis',
	kafka = 'kafka',
	nginx = 'Nginx',

	// Misc
	php = 'PHP',
	wordpress = 'Wordpress',
	chrome_extensions = 'Chrome Extensions',
	telegram_bots = 'Telegram Bots',
	phaser3 = 'Phaser 3',
	cordova = 'Cordova',
	react_native = 'React Native',
}

export interface IJob {
	role: string;
	companyName: string;
	projectDesc: string;
	from: Date;
	to: Date;
	achievements: string[];
	stack: ETech[];
}

interface IContact {
	name: string;
	value: string;
}

export interface IResume {
	name: string;
	title: string;
	description: string;
	contacts: IContact[];
	coreStack: { name: ETech; years: number }[];
	hobbies: string[];
	experience: IJob[];
}

const START_DATE = new Date('2016 Jan');
const YEARS = differenceInYears(Date.now(), START_DATE);
export const RESUME: IResume = {
	name: 'Emil Zaripov',
	title: `Software Engineer`,
	description: `I'm a Senior Javascript Developer with ${YEARS}+ years of experience.
		<br />I have a strong background with both frontend and backend sides.
		Also, I enjoy teamwork, so I can help screen candidates and mentor junior developers.
		<br />I value a job that challenges me to learn and grow in my career.
		Work-life balance is important to me, so I appreciate a job that allows for flexible hours and the ability to work remotely.`,
	coreStack: [
		{ name: ETech.javascript, years: 7 },
		{ name: ETech.typescript, years: 5 },
		{ name: ETech.nodejs, years: 5 },
		{ name: ETech.nestjs, years: 4 },
		{ name: ETech.postgres, years: 4 },
		{ name: ETech.typeorm, years: 4 },
		{ name: ETech.mongodb, years: 3 },
		{ name: ETech.mongoose, years: 3 },

		{ name: ETech.html, years: 7 },
		{ name: ETech.reactjs, years: 6 },
		{ name: ETech.redux, years: 6 },
		{ name: ETech.mobx, years: 3 },
		{ name: ETech.web3, years: 2 },

		{ name: ETech.git, years: 6 },
		{ name: ETech.linux, years: 4 },
		{ name: ETech.docker, years: 3 },
		{ name: ETech.jest, years: 2 },
		{ name: ETech.python, years: 2 },
		{ name: ETech.aws, years: 2 },
		{ name: ETech.nginx, years: 2 },
	],
	experience: [
		{
			role: 'Teamlead',
			companyName: 'BLLNG.com',
			projectDesc: `A crypto project for processing transactions across multiple blockchain networks.
			This platform provides the embedding of crypto payments, which allows users to pay for products and services using cryptocurrency.`,
			to: new Date('2023 May'),
			from: new Date('2022 Apr'),
			achievements: [
				'Developed MVP version of web service, resulting in a successful launch of the platform',
				'Planned technical sprints for both backend and frontend teams, resulting in increased productivity',
				'Developed backend REST API with financial logic, resulting in seamless cryptocurrency payment processing',
				'Conducted unit tests to ensure code quality and identify any potential issues before release',
				"Reviewed the development team's code, providing constructive feedback and ensuring adherence to coding standards",
				'Led technical interviews for potential Javascript developers, resulting in the hiring of qualified team members',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.postgres,
				ETech.reactjs,
				ETech.redux,
				ETech.styled,
				ETech.web3,
				ETech.ethersjs,

				ETech.docker,
				ETech.nginx,
				ETech.unit_tests,
				ETech.jest,
			],
		},

		{
			role: 'Senior Backend Developer',
			companyName: 'IBM',
			projectDesc: `I worked with the IBM team to develop a web application for Geologists to reduce the cost of drilling and developing new sites.
			The project involved both frontend, design, and backend specialists, as well as geologists on the customer side, and machine learning specialists.`,
			to: new Date('2022 Apr'),
			from: new Date('2021 Sep'),
			achievements: [
				'Developed a GraphQL API that utilized advanced geological analytics operations, enabling more sophisticated data analysis and visualization capabilities for end users',
				'Established and maintained a highly scalable microservice architecture for four different services, ensuring seamless communication and data flow between them',
				'Worked closely with analytics and product managers to identify and develop new application features, resulting in enhanced functionality and an improved user experience',
				'Reviewed the work of the backend development team, providing feedback and guidance on coding standards, design patterns, and best practices',
				'Conducted Javascript technical interviews with potential candidates, assessing their skills and experience',
			],
			stack: [
				ETech.typescript,
				ETech.nodejs,
				ETech.nestjs,
				ETech.graphql,
				ETech.mongodb,
				ETech.mongoose,
				ETech.socketio,
				ETech.python,
			],
		},

		{
			role: 'Tech Lead',
			companyName: 'Sparkme.club',
			projectDesc: `Together with my colleague and a small team of junior developers,
			we implemented a video chat application with game mechanics.
			Unfortunately, our startup failed to launch successfully.`,
			to: new Date('2021 Sep 30'),
			from: new Date('2021 Jan'),
			achievements: [
				'Developed a robust web application from zero, starting with an idea and taking it to a minimum viable product (MVP)',
				'Planned technical issues and worked on sprints planning for the team, ensuring that everyone had clear priorities and a roadmap for completing tasks efficiently and effectively',
				'Mentored two junior frontend developers on the team, providing guidance on coding best practices, architecture, and design patterns to help them grow their skills and contribute more effectively to the project',
				'Reviewed all team code to ensure it met high standards for quality, security, and maintainability, providing feedback and suggestions',
			],
			stack: [
				ETech.typescript,
				ETech.express,
				ETech.socketio,
				ETech.reactjs,
				ETech.redux,
				ETech.webrtc,
				ETech.mongodb,
				ETech.mongoose,
				ETech.redis,
				ETech.jest,
				ETech.aws,
			],
		},
		{
			role: 'Senior Backend Developer',
			companyName: 'IBM',
			projectDesc: `I joined the IBM team on an existing project at the initial stage.
			We were developing a system to reduce the costs of work related to drilling and oil facilities.`,
			to: new Date('2021 Jan'),
			from: new Date('2019 Oct'),
			achievements: [
				'Helped to solve critical issues for minimizing operational costs at a drilling company, utilizing technical expertise to identify inefficiencies and streamline processes',
				'Developed and maintained a microservice gateway to work with the Primavera system, enabling efficient and reliable communication between different components of the system',
				'Maintained NPM packages for company development processes, ensuring that all team members had access to the latest and most up-to-date tools and technologies for development',
				'Developed a REST API gateway between frontend and Python analytics, enabling efficient and secure communication between different components of the system',
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
			role: 'Team Lead',
			companyName: 'Allbebet',
			projectDesc: `I was invited to this project at the peak of the crypto ICOs.
				It was necessary to develop a platform for betting on soccer matches.
				Together with a small team, I managed to develop the MVP in a short time.
				Unfortunately, the owners were not able to continue this project.`,
			to: new Date('2019 Aug'),
			from: new Date('2019 Mar'),
			achievements: [
				'Developed a web application from Zero to MVP, utilizing technical expertise to design, develop and deploy a fully functional application that met all customer requirements',
				'Planned backend and blockchain issues for the team, utilizing strategic planning and project management skills to identify potential roadblocks and develop solutions that ensured the timely delivery of high-quality software',
				'Integrated blockchain for web application, utilizing expertise in blockchain technology to integrate a secure and reliable blockchain solution into the web application',
			],
			stack: [
				ETech.javascript,
				ETech.nodejs,
				ETech.express,
				ETech.mongodb,
				ETech.mongoose,
				ETech.reactjs,
				ETech.mobx,
				ETech.antd,
			],
		},
		{
			role: 'Frontend Developer',
			companyName: 'RobotVera',
			projectDesc: `My first experience of participating in a startup, Robot Vera, is an AI assistant for searching candidates and making automated phone calls to them. The main client was a large business.`,
			to: new Date('2019 Aug'),
			from: new Date('2018 Jul'),
			achievements: [
				'Enhanced the frontend performance of a web application, resulting in a faster and more responsive user experience',
				'Developed and maintained a Content Management System (CMS) for company-wide use, streamlining content creation and management processes',
				'Provided accurate estimates for technical tasks as a member of a team, resulting in efficient and effective project planning',
				'Successfully refactored a large codebase of legacy HTML to modern React development, improving maintainability and scalability of the code',
			],
			stack: [ETech.reactjs, ETech.mobx, ETech.mobx_state_tree, ETech.antd, ETech.django, ETech.html],
		},
		{
			role: 'Frontend Developer',
			companyName: 'Freelance - Dextra - Unit6',
			projectDesc: `First steps in web development. I combined work in studio offices and remote freelancing.
			A lot of questions and answers - as a result, I have gained a lot of experience in different fields.`,
			to: new Date('2018 Jun'),
			from: START_DATE,
			achievements: [
				'Created numerous web page markups with cross-platform support to ensure optimal user experience',
				'Developed custom WordPress applications for freelance clients to meet their specific needs and requirements',
				'Developed and maintained several Jira plugins to optimize project management and team collaboration',
				'Maintained and improved the performance of current web solutions to enhance user experience and increase business efficiency',
			],
			stack: [
				ETech.javascript,
				ETech.html,
				ETech.dom_api,
				ETech.pug,
				ETech.scss,
				ETech.php,
				ETech.wordpress,

				ETech.reactjs,
				ETech.redux,
			],
		},
	],
	hobbies: [
		'🦄 I love exploring new technologies and ideas by working on side projects',
		'🥋 I have a passion for Brazilian jiu-jitsu',
		'🍳 I enjoy cooking and experimenting with different recipes',
	],
	contacts: [
		{ name: 'Email', value: 'hi@emil.pw' },
		{ name: 'LinkedIn', value: 'https://www.linkedin.com/in/zemil' },
	],
};
