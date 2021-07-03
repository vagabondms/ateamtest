import React from 'react';

import Title from '../Title/Title';
import Content from '../Content/Content';

import { MainAreaWrapper } from './styles';

const Container = ({ children }) => {
	return (
		<MainAreaWrapper>
			<Title />
			<Content />
		</MainAreaWrapper>
	);
};

export default Container;
