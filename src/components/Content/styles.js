import styled from 'styled-components';

export const ContentWrapper = styled.div`
	margin-top: 15px;
	display: grid;

	grid-template-columns: repeat(12, 1fr);
	@media (max-width: 360px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 0 23px;
	}
	grid-template-rows: max-content;
	grid-auto-flow: dense;
	grid-gap: 16px;
`;
