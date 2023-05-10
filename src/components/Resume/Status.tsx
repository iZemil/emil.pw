import * as React from 'react';

import styles from './styles.module.css';

interface IProps {
	isOpenToWork: boolean;
}

export const Status = (props: IProps) => {
	const { isOpenToWork } = props;

	if (!isOpenToWork) {
		return null;
	}

	return <div className={styles.resumeStatus}>Open to work</div>;
};
