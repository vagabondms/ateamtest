import React, { useCallback, useState, useMemo } from 'react';
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
	const dispatch = useDispatch();
	const materialFilterLength = useSelector(state => state.materialFilter).length;
	const methodFilterLength = useSelector(state => state.methodFilter).length;
	const materialList = useSelector(state => state.materialList);
	const methodList = useSelector(state => state.methodList);

	const initialMaterialStatus = useMemo(
		() =>
			materialList.reduce((obj, key) => {
				obj[key] = false;
				return obj;
			}, {}),
		[materialList],
	);

	const initialMethodStatus = useMemo(
		() =>
			methodList.reduce((obj, key) => {
				obj[key] = false;
				return obj;
			}, {}),
		[methodList],
	);

	const [materialStatus, setMaterialStatus] = useState(initialMaterialStatus);

	const [methodStatus, setMethodStatus] = useState(initialMethodStatus);

	const onClickReset = useCallback(() => {
		dispatch({
			type: 'RESET',
		});
		setMaterialStatus(initialMaterialStatus);
		setMethodStatus(initialMethodStatus);
	}, [dispatch, setMaterialStatus, setMethodStatus, initialMethodStatus, initialMaterialStatus]);

	return (
		<TitleWrapper>
			<PageDescription>
				<div className="title">들어온 요청</div>
				<div className="description">파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
			</PageDescription>
			<ConditionWrapper>
				<SelectorWrapper>
					<Selector
						list={methodList}
						category="가공 방식"
						status={methodStatus}
						setStatus={setMethodStatus}
						count={methodFilterLength}
					/>
					<Selector
						list={materialList}
						category="재료"
						status={materialStatus}
						setStatus={setMaterialStatus}
						count={materialFilterLength}
					/>
					{(materialFilterLength !== 0 || methodFilterLength !== 0) && (
						<ResetWrapper onClick={onClickReset}>
							<StyledRedoOutlined />
							<span> 필터링 리셋</span>
						</ResetWrapper>
					)}
				</SelectorWrapper>
				<StatusSelector />
			</ConditionWrapper>
		</TitleWrapper>
	);
};

export default Title;
