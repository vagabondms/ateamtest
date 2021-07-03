import React from 'react';

import { CardTitleWrapper } from './styles';

const CardTitle = () => {
	return (
		<CardTitleWrapper>
			<span className="card_status">상담중</span>
			<div className="request_title">자동차 시제품 제작</div>
			<div className="request_client">A 고객사</div>
			<div className="request_due"> 2020.12.14까지 납기</div>
		</CardTitleWrapper>
	);
};

export default CardTitle;
