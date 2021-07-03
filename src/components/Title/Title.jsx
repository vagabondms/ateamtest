import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	TitleWrapper,
	ConditionWrapper,
	SelectorWrapper,
	ResetWrapper,
	StyledRedoOutlined,
	PageDescription,
} from './styles';

import Selector from '../Selector/Selector';

import StatusSelector from '../StatusSelector/StatusSelector';

const Title = () => {
	const materialList = useSelector(state => state.materialList);
	const methodList = useSelector(state => state.methodList);

	const dispatch = useDispatch();

	const onClickReset = useCallback(() => {
		dispatch({
			type: 'RESET',
		});
	}, [dispatch]);

	return (
		<TitleWrapper>
			<PageDescription>
				<div className="title">들어온 요청</div>
				<div className="description">파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
			</PageDescription>
			<ConditionWrapper>
				<SelectorWrapper>
					<Selector list={methodList} title={'가공방식'} />
					<Selector list={materialList} title={'재료'} />
					<ResetWrapper>
						<StyledRedoOutlined onClick={onClickReset} />
						<span> 필터링 리셋</span>
					</ResetWrapper>
				</SelectorWrapper>
				<StatusSelector />
			</ConditionWrapper>
		</TitleWrapper>
	);
};

export default Title;
