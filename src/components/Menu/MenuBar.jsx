import { BarcodeOutlined } from '@ant-design/icons';
import React from 'react';

import {
	MenuWrapper,
	HeadDiv,
	HeaderContentWrapper,
	LogoWrapper,
	MenuContentWrapper,
} from './styles';

const MenuBar = () => {
	return (
		<MenuWrapper>
			<HeadDiv>
				<HeaderContentWrapper>
					<LogoWrapper>
						<span id="logo">CAPA 파트너스</span>
					</LogoWrapper>
				</HeaderContentWrapper>
			</HeadDiv>
			<MenuContentWrapper>
				<div>
					<BarcodeOutlined /> <span>파트너정밀가공</span>
				</div>
				<div>로그아웃</div>
			</MenuContentWrapper>
		</MenuWrapper>
	);
};

export default MenuBar;
