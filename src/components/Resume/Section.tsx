import * as React from 'react';

import styles from './styles.module.css';

export const Section = (props: { title?: string; children: React.ReactNode }) => {
	const { title, children } = props;

	return (
		<div className={styles.section}>
			{title && <h2>{title}</h2>}

			<div className={styles.section__list}>{children}</div>
		</div>
	);
};
