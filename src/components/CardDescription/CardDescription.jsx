import React from 'react';

import { CardDescriptionCategory, CardDescriptionContent, CardDescriptionWrapper } from './styles';

const CardDescription = () => {
	return (
		<CardDescriptionWrapper>
			<CardDescriptionCategory>
				<div>도면개수</div>
				<div>총 수량</div>
				<div>가공방식</div>
				<div>재료</div>
			</CardDescriptionCategory>
			<CardDescriptionContent>
				<div>2개</div>
				<div>100개</div>
				<div>밀링, 선반</div>
				<div>알류미늄</div>
			</CardDescriptionContent>
		</CardDescriptionWrapper>
	);
};

export default CardDescription;
