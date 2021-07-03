import styled from 'styled-components';
import { Button } from 'antd';

export const CardButtonWrapper = styled.div`
	margin-top: 32px;
`;

const StyledButton = styled(Button)`
	height: 32;
	margin-right: 10px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 14px;
`;

export const ShowDetailButton = styled(StyledButton)``;
export const ChatButton = styled(StyledButton)`
	color: #2196f3;
	border-color: #2196f3;
`;
