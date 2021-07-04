import React from 'react';
import { ShowMore } from './styles';
import { MenuOutlined } from '@ant-design/icons';

const ShowMoreButton = ({ handleClickShowMoreButton }) => {
	return (
		<ShowMore onClick={handleClickShowMoreButton}>
			<MenuOutlined />
		</ShowMore>
	);
};

export default ShowMoreButton;
