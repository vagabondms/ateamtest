import React from 'react';

import { CardWrapper } from './styles';

import CardTitle from '../CardTitle/CardTitle';
import CardDescription from '../CardDescription/CardDescription';
import CardButtons from '../CardButtons/CardButtons';

const RequestCard = ({ request }) => {
	return (
		<CardWrapper>
			<CardTitle request={request} />
			<CardDescription request={request} />
			<CardButtons />
		</CardWrapper>
	);
};

// export default RequestCard;
export default RequestCard;
