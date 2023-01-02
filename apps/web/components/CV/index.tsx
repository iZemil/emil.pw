import { format, formatDistance } from 'date-fns';
import Image from 'next/image';
import * as React from 'react';
import { Button, Divider, Text, Title } from 'react-aui';

import * as S from './Styled';
import { DATA } from './consts';
import { ETech, IJob } from './types';

const Section = (props: { title?: string; children: React.ReactNode }) => {
	const { title, children } = props;

	return (
		<>
			{title && (
				<Title h2 color="grey" bottom={5}>
					{title}
				</Title>
			)}

			{children}
		</>
	);
};

const Job = (props: IJob) => {
	const date = (d: Date) => format(d, 'MMM yyyy');
	const { title, company, achievements, from, to, stack } = props;

	return (
		<S.Job>
			<Title h3 vertical="bottom">
				{title}
			</Title>

			<S.JobCo>
				<Text color="grey">{company}</Text>
				{' • '}
				<Text size="small">
					{date(from)} - {date(to)} ({formatDistance(from, to)})
				</Text>
			</S.JobCo>

			<S.List>
				{achievements.map((a, key) => (
					<S.Achievment key={key}>{a}</S.Achievment>
				))}
			</S.List>

			<S.JobStack>
				{stack.map((it, index) => (
					<span key={`${it}-${index}`}>{it}</span>
				))}
			</S.JobStack>
		</S.Job>
	);
};

const IMAGE_SIZE = 200;
export function CV() {
	const ref = React.useRef<HTMLDivElement>(null);
	const [withAllStack, setAllStack] = React.useState(false);

	const handleDownload = () => {
		window.print();
	};

	return (
		<S.Wrapper>
			<S.Download className="no-print">
				<Button onClick={handleDownload}>Download CV</Button>
			</S.Download>

			<S.CV ref={ref}>
				<S.Head>
					<Image src="/emil.jpg" alt="Emil" width={IMAGE_SIZE} height={IMAGE_SIZE} />

					<S.HeadMeta>
						<S.HeadTitle bottom={10}>{DATA.title}</S.HeadTitle>

						<Text>
							<span dangerouslySetInnerHTML={{ __html: DATA.description }} />
						</Text>

						<Section>
							<Text>
								<Text bold inline>
									{withAllStack ? 'Worked with' : 'Core Stack'}
									{': '}
								</Text>
								<Text inline>
									{withAllStack ? [...Object.values(ETech)].join(', ') : DATA.stack.join(', ')}
									<Button
										type="text"
										size="small"
										className="no-print"
										onClick={() => {
											setAllStack(!withAllStack);
										}}
										style={{ display: 'inline' }}
									>
										{withAllStack ? 'see core stack' : 'see all skills'}
									</Button>
								</Text>
							</Text>
						</Section>
					</S.HeadMeta>
				</S.Head>

				<Divider dashed />
				<Section title="Experience">
					<S.List>
						{DATA.experience.map((it, key) => (
							<Job key={key} {...it} />
						))}
					</S.List>
				</Section>

				<Divider dashed />
				<Section title="Hobbies">
					<S.List>
						{DATA.hobbies.map((it) => (
							<Text key={it} size="large">
								{it}
							</Text>
						))}
					</S.List>
				</Section>

				<Divider dashed />
				<Section title="Contacts">
					<S.List>
						{DATA.contacts.map((it) => (
							<Text key={it.name} color="grey">
								{it.name}:{'  '}
								<Text>{it.value}</Text>
							</Text>
						))}
					</S.List>
				</Section>
			</S.CV>
		</S.Wrapper>
	);
}
