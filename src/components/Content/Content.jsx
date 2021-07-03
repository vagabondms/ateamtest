import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import Placeholder from '../Placeholder/Placeholder';
import RequestCard from '../RequestCard/RequestCard';

import { ContentWrapper } from './styles';

const Content = () => {
	const requests = useSelector(state => state.requests);
	const isOngoingFilterActive = useSelector(state => state.ongoingFilter);
	const materialFilter = useSelector(state => state.materialFilter);
	const methodFilter = useSelector(state => state.methodFilter);

	const check = useCallback((el, filter) => {
		return filter.every(f => el.includes(f));
	}, []);

	return (
		<ContentWrapper>
			{requests.length === 0 ? (
				<>
					<Placeholder />
				</>
			) : (
				<>
					{requests
						.filter(el => (isOngoingFilterActive ? el.status === '상담중' : true))
						.filter(el => (materialFilter.length === 0 ? true : check(el.material, materialFilter)))
						.filter(el => (methodFilter.length === 0 ? true : check(el.method, methodFilter)))
						.map(el => (
							<RequestCard request={el} key={el.id} />
						))}
				</>
			)}
		</ContentWrapper>
	);
};

export default Content;
