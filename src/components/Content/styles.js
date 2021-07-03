import styled from 'styled-components';

export const ContentWrapper = styled.div`
	grid-column: 2;
	grid-row: 2;
	display: grid;
	grid-template-columns: repeat(12, minmax(auto, auto));
	grid-template-rows: max-content;
	grid-auto-flow: dense;
	grid-gap: 16px;
`;
