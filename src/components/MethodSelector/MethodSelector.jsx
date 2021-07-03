import React from 'react';

import { Dropdown, Button, Checkbox, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MethodSelector = () => {
	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Checkbox> 밀링 </Checkbox>
			</Menu.Item>
			<Menu.Item key="2">
				<Checkbox> 선반 </Checkbox>
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={menu}>
			<Button>
				가공방식 <DownOutlined />
			</Button>
		</Dropdown>
	);
};

export default MethodSelector;
