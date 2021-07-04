import styled from 'styled-components';

export const HeadDiv = styled.div`
	grid-area: header;
	color: #ffffff;
	background-color: #1565c0;
	display: grid;
	grid-template-columns: 1fr 1200px 1fr;
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

export const LoginMenu = styled.span`
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 360px) {
		display: none;
	}
`;

export const GlobalLayout = styled.div`
	display: grid;
	grid-template-areas:
		'header header header'
		'. body .'
		'footer footer footer';
	grid-template-columns: 1fr 1200px 1fr;
	grid-template-rows: 70px minmax(auto, auto) 70px;
	@media (max-width: 360px) {
		display: flex;
		flex-direction: column;
	}
	height: 100vh;
	overflow: scroll;
`;
