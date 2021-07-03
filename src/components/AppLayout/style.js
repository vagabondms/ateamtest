import styled from 'styled-components';

export const HeadDiv = styled.div`
	color: #ffffff;
	height: 70px;
	background-color: #1565c0;
	display: grid;
	grid-template-columns: 1fr 1200px 1fr;
	grid-gap: 2rem;
`;

export const HeaderContentWrapper = styled.div`
	grid-column: 2;
	display: flex;
	justify-content: space-between;
`;

export const LogoWrapper = styled.span`
	grid-column: 1/4;
	margin-left: 5px;
	min-width: 200px;
	display: flex;
	align-items: center;

	& > #logo {
		margin-left: 10px;
		font-size: 20px;
		font-weight: bold;
	}
`;

export const LoginMenu = styled.span`
	grid-column: 11/13;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const GlobalLayout = styled.div`
	display: grid;
	grid-column: 1fr 1200px 1fr;
	grid-row: 70px minmax(auto, auto) 70px;
`;
