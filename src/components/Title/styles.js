import styled from 'styled-components';
import { RedoOutlined } from '@ant-design/icons';

export const TitleWrapper = styled.div`
	grid-column: 2;
	grid-row: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
	@media (max-width: 360px) {
		padding: 0 23px;
	}
`;

export const PageDescription = styled.div`
	margin-bottom: 20px;
	& > .title {
		font-weight: bold;
		font-size: 20px;
		margin-top: 30px;
	}
	& > .description {
		font-weight: normal;
		font-size: 16px;
	}
`;

export const ConditionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 360px) {
		flex-direction: column;
	}
`;

export const SelectorWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 360px) {
		justify-content: start;
	}
`;

export const StyledRedoOutlined = styled(RedoOutlined).attrs(props => ({
	style: { color: '#2196F3' },
}))`
	font-size: 15px;
	margin-left: 10px;
`;

export const ResetWrapper = styled.span`
	color: #2196f3;
	&:hover {
		cursor: pointer;
		& > span {
			font-weight: bold;
		}
		& > span:first-child {
			transition: all ease 1s;
			transform: rotate(360deg);
		}
	}
`;
