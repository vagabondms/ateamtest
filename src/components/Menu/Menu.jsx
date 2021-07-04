import React from 'react';

import { Background } from './styles';
import MenuBar from './MenuBar';

const Menu = ({ onClickBackground }) => {
	return (
		<>
			<MenuBar />
			<Background onClick={onClickBackground}></Background>
		</>
	);
};

export default Menu;
