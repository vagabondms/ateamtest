import React from 'react';

import { CardDescriptionCategory, CardDescriptionContent, CardDescriptionWrapper } from './styles';

const CardDescription = ({ request }) => {
	const { count, amount, method, material, docs } = request;
	return (
		<CardDescriptionWrapper>
			<CardDescriptionCategory>
				<div>도면개수</div>
				<div>총 수량</div>
				<div>가공방식</div>
				<div>재료</div>
			</CardDescriptionCategory>
			<CardDescriptionContent>
				<div>{count ? count : docs}개</div>
				<div>{amount}개</div>
				<div>{method.join(', ')}</div>
				<div>{material.join(', ')}</div>
			</CardDescriptionContent>
		</CardDescriptionWrapper>
	);
};

export default CardDescription;
