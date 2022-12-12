import { Title } from 'react-aui';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CV = styled.div`
	max-width: 768px;
	max-width: 768px;
	width: 100%;
	margin: auto;
	padding: 20px;
`;

export const Head = styled.div`
	display: flex;
	gap: 20px;
`;

export const HeadTitle = styled(Title).attrs({ h1: true, vertical: 'top', justifyContent: 'left' })`
	flex-direction: column;
	gap: 0;
	line-height: 1 !important;
`;

export const HeadMeta = styled.div``;

export const Job = styled.div``;

export const JobCo = styled.div`
	margin-bottom: 5px;
`;

export const JobStack = styled.div`
	padding: 10px 0;
	display: flex;
	gap: 5px;
	flex-wrap: wrap;

	span {
		border: 1px solid lightgrey;
		padding: 5px 10px;
		border-radius: 50px;
		font-size: 13px;
	}
`;

export const Achievment = styled.div`
	&::before {
		content: '';
		margin-inline-end: 1ch;
		display: inline-block;
		width: 10px;
		height: 10px;
		background: lightgrey;
		border-radius: 50%;
	}
`;

export const Download = styled.div`
	position: fixed;
	right: 20px;
	bottom: 20px;
	z-index: 9;
`;

export const List = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
