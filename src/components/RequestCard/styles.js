import styled from 'styled-components';

export const CardWrapper = styled.div`
	grid-column: auto / span 4;
	@media (max-width: 560px) {
		grid-column: auto / span 3;
	}
	height: 356px;
	border: 1px solid #e5e5e5;
	display: flex;
	flex-direction: column;
	padding: 24px 16px;
`;
