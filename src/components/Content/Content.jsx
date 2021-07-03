import React from 'react';

import Placeholder from '../Placeholder/Placeholder';
import RequestCard from '../RequestCard/RequestCard';

import { ContentWrapper } from './styles';

const Content = () => {
	const length = 1;
	return (
		<ContentWrapper>
			{length === 0 ? (
				<>
					<Placeholder />
				</>
			) : (
				<>
					{Array(15)
						.fill(0)
						.map(el => (
							<RequestCard />
						))}
				</>
			)}
		</ContentWrapper>
	);
};

export default Content;
