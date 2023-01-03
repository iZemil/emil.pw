import * as React from 'react';
import clsx from 'clsx';

import { DATA, ETech } from './consts';
import { Section } from './Section';
import { Job } from './Job';
import styles from './styles.module.css';

export function Resume() {
	const [isAllStack, setAllStack] = React.useState(false);

	const handleDownload = () => {
		window.print();
	};

	return (
		<div className={styles.resume}>
			<button className={clsx([styles.download, 'button button--primary', 'no-print'])} onClick={handleDownload}>
				Download
			</button>

			<div className={clsx([styles.resume__header, styles.section])}>
				<img src="/img/emil.jpg" alt="Emil" className={styles.resume__img} />

				<div className={styles.resume__meta}>
					<h1 className={styles.resume__title} dangerouslySetInnerHTML={{ __html: DATA.title }} />

					<div
						className={styles.resume__description}
						dangerouslySetInnerHTML={{ __html: DATA.description }}
					/>
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
							setAllStack(!isAllStack);
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
