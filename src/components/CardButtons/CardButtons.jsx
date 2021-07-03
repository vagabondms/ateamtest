import React from 'react';

import { CardButtonWrapper, StyledButton } from './styles';

const CardButtons = () => {
	return (
		<CardButtonWrapper>
			<StyledButton type="primary">요청 내역 보기</StyledButton>
			<StyledButton>채팅 하기</StyledButton>
		</CardButtonWrapper>
	);
};

export default CardButtons;
