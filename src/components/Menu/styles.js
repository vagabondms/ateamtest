import styled from 'styled-components';

export const Background = styled.div`
	position: absolute;
	z-index: 1;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: #000000;
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.5;
		}
	}
	animation: 1s ease-out 0s 1 fadeIn;
	opacity: 0.5;
	width: 100%;
`;

export const MenuWrapper = styled.div`
	@keyframes slideIn {
		0% {
			transform: translateX(-280px);
		}
		100% {
			transform: translateX(0);
		}
	}
	animation: 1s ease-out 0s 1 slideIn;

	position: absolute;
	background: #ffffff;
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
	width: 280px;
`;

export const HeadDiv = styled.div`
	grid-area: header;
	color: #1565c0;
	display: grid;
	grid-template-columns: 1fr 1200px 1fr;
	border-bottom: 1px solid #e5e5e5;
	@media (max-width: 360px) {
		display: flex;
		height: 44px;
		padding: 23px;
	}
`;

export const HeaderContentWrapper = styled.div`
	grid-column: 2;
	display: flex;
	justify-content: space-between;
`;

export const LogoWrapper = styled.span`
	min-width: 200px;
	display: flex;
	align-items: center;

	& > #logo {
		font-size: 20px;
		font-weight: bold;
	}
`;

export const MenuContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 22px 38px;
	font-weight: 500;
	font-size: 14px;
	& > div {
		margin: 10px 0;
	}
`;
