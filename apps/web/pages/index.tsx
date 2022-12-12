import Image from 'next/image';
import * as React from 'react';
import { Button, Text, Title, useColor } from 'react-aui';
import Pdf from 'react-to-pdf';
import styled from 'styled-components';

enum ETech {
	postgres = 'postgres',
	docker = 'docker',
	typescript = 'typescript',
	nodejs = 'nodejs',
	python = 'python',
	mongodb = 'mongodb',
}

interface IJob {
	title: string;
	company: string;
	from: Date;
	to: Date;
	achievments: string[];
	stack: ETech[];
}

interface IContact {
	name: string;
	value: string;
}

interface ICV {
	pdfFilename: string;
	contacts: IContact[];
	hobbies: string[];
	career: IJob[];
}

const CV: ICV = {
	pdfFilename: 'zaripov-emil.pdf',
	contacts: [
		{ name: 'email', value: '3zemil🐶gmail.com' },
		{ name: 'linkedin', value: 'https://www.linkedin.com/in/zemil' },
	],
	career: [
		{
			title: 'Backend Developer',
			company: 'PWC (prev IBM Team)',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed a gateway between frontend and analytics sides of the geological application',
				'led javascript technical interviews',
			],
			stack: [],
		},

		{
			title: 'CTO',
			company: 'Sparkme.club',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed a video game chat web application from Zero to MVP',
				'planned tech issues for the team',
				'led product planning with CEO',
			],
			stack: [],
		},
		{
			title: 'Backend Developer',
			company: 'IBM',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed a gateway (frontend - python analytics)',
				'solved backend issues about minimizing operational costs for the drilling company',
			],
			stack: [],
		},
		{
			title: 'Full Stack Developer',
			company: 'Allbebet',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed Gambling platform from zero to MVP',
				'planned backend and blockchain issues for the team',
				'integrated blockchain for web application',
			],
			stack: [],
		},
		{
			title: 'Frontend Developer',
			company: 'RobotVera',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed frontend side of AI Recruitment web application',
				'estimated tech tasks as part of a team',
			],
			stack: [],
		},
		{
			title: 'Frontend Developer',
			company: 'Freelance/Dextra/Unit6',
			from: new Date(),
			to: new Date(),
			achievments: [
				'developed several Jira Plugins',
				'worked with a designer to create landing pages',
				'supported current web solutions',
				'made markup for multiple websites with cross platform support',
				'developed wordpress applications for my freelance clients',
			],
			stack: [],
		},
	],
	hobbies: ['🥋 brazilian jiu-jitsu', '🍳 cooking', '🦄 own projects coding'],
};

const S = {
	Wrapper: {
		$: styled.div`
			display: flex;
			flex-direction: column;
		`,
	},
	$: styled.div`
		max-width: 768px;
		max-width: 768px;
		width: 100%;
		margin: auto;
		padding: 20px;
	`,
	Head: {
		$: styled.div`
			display: flex;
			gap: 20px;
		`,
		Title: {
			$: styled(Title).attrs({ h1: true, vertical: 'top', justifyContent: 'left' })`
				flex-direction: column;
				gap: 0;
				line-height: 1 !important;
			`,
		},
		Meta: {
			$: styled.div``,
		},
	},

	Section: {
		$: styled.div``,
	},

	List: {
		$: styled.div`
			display: flex;
			flex-direction: column;
			gap: 8px;
		`,
	},

	Job: {
		$: styled.div``,
		Achievment: {
			$: styled.div`
				&::before {
					content: '+';
					background: lightgray;
					border-radius: 1ch;
					padding-inline: 1ch;
					margin-inline-end: 1ch;
				}
			`,
		},
	},

	Download: {
		$: styled.div`
			position: fixed;
			right: 20px;
			bottom: 20px;
		`,
	},
};

const Section = (props: { title: string; children: React.ReactNode }) => {
	const { title, children } = props;

	return (
		<S.Section.$>
			<Title h2 color="grey">
				{title}
			</Title>

			{children}
		</S.Section.$>
	);
};

const Job = (props: IJob) => {
	const { title, company, achievments } = props;

	return (
		<S.Job.$>
			<Title h3 vertical="bottom">
				{title}
			</Title>

			<Text>
				<Text>{company}</Text>|<Text>From-To</Text>|<Text>Sum</Text>
			</Text>

			<S.List.$>
				{achievments.map((a, key) => (
					<S.Job.Achievment.$ key={key}>{a}</S.Job.Achievment.$>
				))}
			</S.List.$>
		</S.Job.$>
	);
};

export function Index() {
	const ref = React.useRef<HTMLDivElement>(null);
	const bg = useColor('bg');

	return (
		<S.Wrapper.$>
			<Pdf targetRef={ref} filename={`${CV.pdfFilename}`}>
				{({ toPdf }) => (
					<S.Download.$>
						<Button
							onClick={() => {
								toPdf();
							}}
						>
							Download CV
						</Button>
					</S.Download.$>
				)}
			</Pdf>

			<S.$ ref={ref}>
				<S.Head.$>
					<Image src="/emil.png" alt="Emil" width={256} height={256} />

					<S.Head.Meta.$>
						<S.Head.Title.$ bottom={10}>Emil Zaripov</S.Head.Title.$>

						<Text size="large">
							<b>Senior Full Stack Developer</b> with 6+ years of experience
							<br />
							I’m looking for a Senior Backend Position
						</Text>

						<Section title="Stack">Stack</Section>

						<Section title="Contacts">
							<S.List.$>
								{CV.contacts.map((it) => (
									<Text key={it.name} color="grey">
										{it.name}:{'  '}
										<Text>{it.value}</Text>
									</Text>
								))}
							</S.List.$>
						</Section>
					</S.Head.Meta.$>
				</S.Head.$>

				<Section title="Career">
					<S.List.$>
						{CV.career.map((it, key) => (
							<Job key={key} {...it} />
						))}
					</S.List.$>
				</Section>

				<Section title="Hobbies">
					<S.List.$>
						{CV.hobbies.map((it) => (
							<Text key={it} size="large">
								{it}
							</Text>
						))}
					</S.List.$>
				</Section>
			</S.$>
		</S.Wrapper.$>
	);
}

export default Index;
