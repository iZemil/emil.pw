import * as React from 'react';
import clsx from 'clsx';

import { RESUME, ETech } from './consts';
import { Section } from './Section';
import { Job } from './Job';
import styles from './styles.module.css';
import { Status } from './Status';

export function Resume() {
	const [downloadCounter, setDownloadCounter] = React.useState(0);
	const [isAllSkills, viewAllStack] = React.useState(false);

	React.useEffect(() => {
		if (!isAllSkills && downloadCounter > 0) {
			window.print();
		}
	}, [isAllSkills, downloadCounter]);

	const handleDownload = () => {
		viewAllStack(false);
		setDownloadCounter(downloadCounter + 1);
	};

	return (
		<div className={styles.resume}>
			<Status isOpenToWork={true} />

			<button className={clsx([styles.download, 'button', 'no-print'])} onClick={handleDownload}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<path
						d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<div className={clsx([styles.resumeHeader, styles.section])}>
				<img src="/img/emil.png" alt="Emil" className={styles.resumeImg} />

				<div className={styles.resumeMeta}>
					<h1
						className={styles.resumeTitle}
						dangerouslySetInnerHTML={{ __html: `${RESUME.title}<br />${RESUME.name}` }}
					/>

					<div
						className={styles.resumeDescription}
						dangerouslySetInnerHTML={{ __html: RESUME.description }}
					/>
				</div>
			</div>

			<Section title="Skills">
				<div className={styles.skills}>
					<b>{`${isAllSkills ? 'Common stack' : 'Core stack with years'}`}</b>

					{isAllSkills
						? [...Object.values(ETech)].map((it) => (
								<div key={it} className={styles.skill}>
									{it}
								</div>
						  ))
						: RESUME.coreStack.map((it) => (
								<div key={it.name} className={styles.skill}>
									{it.name} {it.years}+
								</div>
						  ))}

					<span
						className={clsx(['no-print', styles.showStackButton])}
						onClick={() => {
							viewAllStack(!isAllSkills);
						}}
					>
						{isAllSkills ? 'see core' : 'see all'}
					</span>
				</div>
			</Section>

			<Section title="Experience">
				{RESUME.experience.map((it, key) => (
					<Job key={key} {...it} />
				))}
			</Section>

			<Section title="Hobbies">
				{RESUME.hobbies.map((it) => (
					<li key={it}>{it}</li>
				))}
			</Section>

			<Section title="Contacts">
				{RESUME.contacts.map((it) => (
					<li key={it.name}>
						{it.name}:{'  '}
						<b>{it.value}</b>
					</li>
				))}
			</Section>
		</div>
	);
}
