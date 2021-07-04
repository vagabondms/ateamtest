import React from 'react';
import { ShowMore } from './styles';
import { MenuOutlined } from '@ant-design/icons';

const ShowMoreButton = ({ onClickButton }) => {
	return (
		<ShowMore>
			<MenuOutlined onClick={onClickButton} />
		</ShowMore>
	);
};

export default ShowMoreButton;
