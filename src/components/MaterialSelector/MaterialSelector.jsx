import React from 'react';

import { Dropdown, Button, Checkbox, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const MaterialSelector = () => {
	const menu = (
		<Menu>
			<Menu.Item key="1">
				<Checkbox> 알루미늄 </Checkbox>
			</Menu.Item>
			<Menu.Item key="2">
				<Checkbox> 탄소강 </Checkbox>
			</Menu.Item>
			<Menu.Item key="3">
				<Checkbox> 구리 </Checkbox>
			</Menu.Item>
			<Menu.Item key="4">
				<Checkbox> 황금강 </Checkbox>
			</Menu.Item>
			<Menu.Item key="5">
				<Checkbox> 강철</Checkbox>
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={menu}>
			<Button>
				재료 <DownOutlined />
			</Button>
		</Dropdown>
	);
};

export default MaterialSelector;
