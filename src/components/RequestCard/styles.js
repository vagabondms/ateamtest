import styled from 'styled-components';

export const CardWrapper = styled.div`
	grid-column: auto / span 4;
	@media (max-width: 560px) {
		grid-column: auto / span 3;
	}
	box-sizing: border-box;
	height: 356px;
	border: 1px solid #e5e5e5;
	display: flex;
	flex-direction: column;
	padding: 24px 16px;
	&:hover {
		box-shadow: 0.5px 0.5px 2px 2px #2196f3;
	}
`;
