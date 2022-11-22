import { color } from 'react-aui';
import styled from 'styled-components';

export const S = {
	Promo: {
		$: styled.div`
			max-width: 400px;
			margin: auto;
		`,
	},
	Cards: {
		$: styled.div<{ cards: number }>`
			margin: 20px auto 60px;
			position: relative;
			max-width: 380px;
			width: 100%;
			height: 235px;
			box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgb(0, 0, 0, 0.3);

			${(props) => {
				const { cards } = props;
				const delay = 4;
				const time = delay * cards;

				return `
                    & > div {
                        animation: ${time}s card-slider infinite linear;
                        opacity: 0;
        
                        ${Array.from({ length: cards }).map(
							(_, index) => `
                            :nth-child(${index + 1}) {
                                animation-delay: ${index * delay}s;
                            }
                        `
						)}
                }
    
                @keyframes card-slider {
                    10% {
                        opacity: 1.0;
                    }
                    40% {
                        opacity: 0.0;
                    }
                    50% {
                        transform: perspective(1000px) translate3d(0px, 100px, -200px) rotateX(-25deg) scale(0.98);

                    }
                }`;
			}}
		`,
	},
	Card: {
		$: styled.div<{ color: string }>`
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			border-radius: 16px;
			// background: linear-gradient(-125deg, ${(props) => props.color}20, ${(props) => props.color}80 55%);
			background: ${(props) => props.color};
			position: absolute;
			transform-style: preserve-3d;

			&::after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 16px;
				background: ${(props) => props.color}20;
				z-index: -1;
				left: 0;
				top: 6px;
				transform: translateZ(-1px);
			}
		`,
		NetworkToken: {
			$: styled.div`
				bottom: 18px;
				left: 18px;
				position: absolute;
				background: ${color('white')}30;
				border-radius: 100px;
				display: flex;
				align-items: center;
				padding: 10px 20px;
				font-weight: bold;
			`,
		},
		Address: {
			$: styled.div`
				position: absolute;
				bottom: 64px;
				left: 18px;
				-webkit-text-security: disc;
				font-size: 16px;
			`,
		},
		Network: {
			$: styled.div`
				width: 84px;
				position: absolute;
				bottom: 18px;
				right: 18px;
				font-size: 24px;
				font-weight: bold;
				text-align: right;
				transform: scaley(1.2);
			`,
		},
		Icon: {
			$: styled.div`
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				padding-bottom: 40px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			`,
		},
	},
	Slogan: {
		$: styled.h1`
			margin: 20px 0;
			font-size: 32px;
			position: relative;
		`,
	},
	Desc: {
		$: styled.div`
			font-size: 18px;
			color: ${color('grey')};
		`,
	},
	Tools: {
		$: styled.div`
			display: flex;
			gap: 20px;
			margin-top: 20px;
			align-items: center;

			a {
				width: 100%;
			}
		`,
	},
	Waves: {
		$: styled.div`
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: flex-end;
			justify-content: center;

			svg {
				width: 100%;
				max-height: 240px;
			}

			.parallax > use {
				animation: move-forever 60s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

				&:nth-child(1) {
					fill: #ffffff05;
					animation-delay: -1s;
					animation-duration: 30s;
				}

				&:nth-child(2) {
					fill: #ffffff10;
					animation-delay: -2s;
					animation-duration: 20s;
				}

				&:nth-child(3) {
					fill: #ffffff15;
					animation-delay: -3s;
					animation-duration: 10s;
				}
			}

			@keyframes move-forever {
				0% {
					transform: translate3d(-90px, 0, 0);
				}
				100% {
					transform: translate3d(85px, 0, 0);
				}
			}
		`,
	},
};
