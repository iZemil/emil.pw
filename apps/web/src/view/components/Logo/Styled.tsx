import { Button, color, getFontSize, padding } from 'react-aui';
import styled from 'styled-components';

const random = (max: number, min = 0) => Math.random() * (max - min) + min;
const genAnim = () => {
	let keyframes = '';

	Array.from({ length: 20 }).forEach((_, step) => {
		const percent = step * 5;

		keyframes += `
			${percent}% {
				clip: rect(${random(100)}px, 9999px, ${random(100)}px, 0);
				transform: skew(${random(100) / 100}deg);
			}
		`;
	});

	return keyframes;
};
const glitch = () => {
	return `
	position: relative;
	color: white;
	letter-spacing: 0.2em;
	animation: anim-skew 3s infinite linear alternate-reverse;

	&::before,
	&::after {
		content: 'emil';
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}

	&::before {
		left: 2px;
		text-shadow: -2px 0 #ff00c1;
		clip: rect(44px, 450px, 56px, 0);
		animation: anim-before 5s infinite linear alternate-reverse;
	}

	&::after {
		left: -2px;
		text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
		animation: anim-after 4s infinite linear alternate-reverse;
	}
	`;
};

const S = {
	$: styled(Button)`
		gap: ${padding('small')};

		@media screen and (max-width: 480px) {
			padding: 0;
		}
	`,
	Title: {
		$: styled.div`
			font-weight: bold;

			${glitch};

			@keyframes anim-before {
				${genAnim}
			}

			@keyframes anim-after {
				${genAnim}
			}

			@keyframes anim-skew {
				${() => {
					let keyframes = '';

					Array.from({ length: 10 }).forEach((_, step) => {
						const percent = step * 10;

						keyframes += `
							${percent}% {
								transform: skew(${random(10) - 5}deg);
							}
						`;
					});

					return keyframes;
				}}
			}
		`,
	},
	Desc: {
		$: styled.div`
			font-size: ${getFontSize('small')}px;
			font-weight: bold;
			margin-top: auto;
			color: ${color('text')};
		`,
	},
};

export default S;
