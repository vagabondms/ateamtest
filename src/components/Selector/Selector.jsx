import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, Checkbox, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { StyledButton } from './styles';

const MethodSelector = ({ list, title }) => {
	const dispatch = useDispatch();
	const selectedCount = useSelector(state =>
		title === '재료' ? state.materialFilter : state.methodFilter,
	).length;

	const [isVisible, setIsVisible] = useState(false);

	const handleVisibleChange = useCallback(flag => {
		setIsVisible(state => flag);
	}, []);

	const onClickCheckbox = useCallback(
		e => {
			const { name, checked } = e.target;
			let type = '';

			if (title === '재료') {
				if (checked) {
					type = 'ADD_TO_MATERIAL_FILTER';
				} else {
					type = 'REMOVE_FROM_MATERIAL_FILTER';
				}
			} else {
				if (checked) {
					type = 'ADD_TO_METHOD_FILTER';
				} else {
					type = 'REMOVE_FROM_METHOD_FILTER';
				}
			}

			let action = {
				type,
				data: name,
			};

			dispatch(action);
		},
		[title, dispatch],
	);

	const menu = (
		<Menu>
			{list.map((el, idx) => (
				<Menu.Item key={idx}>
					<Checkbox onChange={onClickCheckbox} name={el}>
						{el}
					</Checkbox>
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<Dropdown
			overlay={menu}
			onVisibleChange={handleVisibleChange}
			visible={isVisible}
			trigger={['click']}
		>
			<StyledButton>
				{title}
				{`(${selectedCount})`}
				<DownOutlined />
			</StyledButton>
		</Dropdown>
	);
};

export default MethodSelector;
