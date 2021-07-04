import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Dropdown, Checkbox, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { StyledButton } from './styles';

const MethodSelector = ({ category, count, status, setStatus, list }) => {
	const dispatch = useDispatch();

	const [isVisible, setIsVisible] = useState(false);

	const handleVisibleChange = useCallback(flag => {
		setIsVisible(state => flag);
	}, []);

	const onClickCheckbox = useCallback(
		e => {
			const { name } = e.target;
			setStatus(state => ({ ...state, [name]: !state[name] }));
		},
		[setStatus],
	);

	useEffect(() => {
		dispatch({
			type: 'CHANGE_FILTER',
			data: {
				category,
				filter: Object.keys(status).filter(el => status[el]),
			},
		});
	}, [status, category, dispatch]);

	const menu = useMemo(() => {
		return (
			<Menu>
				{list.map((el, idx) => {
					return (
						<Menu.Item key={idx}>
							<Checkbox onChange={onClickCheckbox} name={el} checked={status[el]}>
								{el}
							</Checkbox>
						</Menu.Item>
					);
				})}
			</Menu>
		);
	}, [status, list, onClickCheckbox]);

	return (
		<Dropdown
			overlay={menu}
			onVisibleChange={handleVisibleChange}
			visible={isVisible}
			trigger={['click']}
		>
			<StyledButton>
				{category + `(${count})`}
				{/* {`(${selectedFilter.length})`} */}
				<DownOutlined />
			</StyledButton>
		</Dropdown>
	);
};

export default MethodSelector;
