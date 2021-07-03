import React from 'react';

import { CardTitleWrapper } from './styles';

const CardTitle = ({ request }) => {
	const { status, title, client, due } = request;
	return (
		<CardTitleWrapper>
			{status === '상담중' && <span className="card_status">상담중</span>}
			<div className="request_title">{title}</div>
			<div className="request_client">{client}</div>
			<div className="request_due"> {due}까지 납기</div>
		</CardTitleWrapper>
	);
};

export default CardTitle;
