import * as React from 'react';
import { format, formatDistance } from 'date-fns';

import { IJob } from './consts';
import styles from './styles.module.css';

export const Job = (props: IJob) => {
	const date = (d: Date) => format(d, 'MMM yyyy');
	const { role, company, achievements, from, to, stack } = props;

	return (
		<div className={styles.job}>
			<h3 className={styles.jobHead}>{company}</h3>

			<h4 className={styles.jobRole}>
				{role}
				<div className={styles.jobDates}>
					{date(from)} - {date(to)} ({formatDistance(from, to)})
				</div>
			</h4>

			<div className={styles.jobTechList}>
				{stack.map((it, index) => (
					<span className={styles.jobTechItem} key={`${it}-${index}`}>
						{it}
					</span>
				))}
			</div>

			<div className={styles.list}>
				{achievements.map((a, key) => (
					<li key={key}>{a}</li>
				))}
			</div>
		</div>
	);
};
