import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSwitch } from './styles';

const StatusSelector = () => {
	const dispatch = useDispatch();
	const isOngoingFilterActive = useSelector(state => state.ongoingFilter);

	const onSwitchChange = useCallback(() => {
		dispatch({
			type: 'CHANGE_ONGOING_FILTER_STATUS',
			data: !isOngoingFilterActive,
		});
	}, [isOngoingFilterActive, dispatch]);

	return (
		<div>
			<StyledSwitch onChange={onSwitchChange} />
			상담 중인 요청만 보기
		</div>
	);
};

export default StatusSelector;
