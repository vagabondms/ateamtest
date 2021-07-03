import styled from 'styled-components';

export const CardDescriptionCategory = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	color: #323d45;
	& > * {
		margin: 4px;
	}
`;

export const CardDescriptionContent = styled.div`
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	margin-left: 62px;
	color: #323d45;
	& > * {
		margin: 4px;
	}
`;

export const CardDescriptionWrapper = styled.div`
	display: flex;
	/* justify-content: space-between; */
	margin-top: 32px;
`;
