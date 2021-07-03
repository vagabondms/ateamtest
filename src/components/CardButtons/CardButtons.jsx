import React from 'react';

import { CardButtonWrapper, ShowDetailButton, ChatButton } from './styles';

const CardButtons = () => {
	return (
		<CardButtonWrapper>
			<ShowDetailButton type="primary">요청 내역 보기</ShowDetailButton>
			<ChatButton>채팅 하기</ChatButton>
		</CardButtonWrapper>
	);
};

export default CardButtons;
