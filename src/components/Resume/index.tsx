import * as React from 'react';
import clsx from 'clsx';

import { DATA, ETech } from './consts';
import { Section } from './Section';
import { Job } from './Job';
import styles from './styles.module.css';

export function Resume() {
	const [downloadCounter, setDownloadCounter] = React.useState(0);
	const [isAllStack, viewAllStack] = React.useState(false);

	React.useEffect(() => {
		if (isAllStack && downloadCounter > 0) {
			window.print();
		}
	}, [isAllStack, downloadCounter]);

	const handleDownload = () => {
		viewAllStack(true);
		setDownloadCounter(downloadCounter + 1);
	};

	return (
		<div className={styles.resume}>
			<button className={clsx([styles.download, 'button button--primary', 'no-print'])} onClick={handleDownload}>
				Download
			</button>

			<div className={clsx([styles.resumeHeader, styles.section])}>
				<img src="/img/emil.jpg" alt="Emil" className={styles.resumeImg} />

				<div className={styles.resumeMeta}>
					<h1 className={styles.resumeTitle} dangerouslySetInnerHTML={{ __html: DATA.title }} />

					<div className={styles.resumeDescription} dangerouslySetInnerHTML={{ __html: DATA.description }} />
				</div>
			</div>

			<Section title="Technical Stack">
				<div>
					<b>
						{isAllStack ? 'Worked with' : 'Core'}
						{': '}
					</b>
					{isAllStack ? [...Object.values(ETech)].join(', ') : DATA.stack.join(', ')}
					<span
						className={clsx(['no-print', styles.showStackButton])}
						onClick={() => {
							viewAllStack(!isAllStack);
						}}
					>
						{isAllStack ? 'see core' : 'see all'}
					</span>
				</div>
			</Section>

			<Section title="Experience">
				{DATA.experience.map((it, key) => (
					<Job key={key} {...it} />
				))}
			</Section>

			<Section title="Hobbies">
				{DATA.hobbies.map((it) => (
					<li key={it}>{it}</li>
				))}
			</Section>

			<Section title="Contacts">
				{DATA.contacts.map((it) => (
					<li key={it.name}>
						{it.name}:{'  '}
						<b>{it.value}</b>
					</li>
				))}
			</Section>
		</div>
	);
}
