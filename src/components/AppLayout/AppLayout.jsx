import React from 'react';
import { BarcodeOutlined, MenuOutlined } from '@ant-design/icons';

import Footer from '../Footer/Footer';
import { HeadDiv, HeaderContentWrapper, LoginMenu, LogoWrapper } from './style';

const AppLayout = ({ children }) => {
	return (
		<>
			<HeadDiv>
				<HeaderContentWrapper>
					<LogoWrapper>
						<MenuOutlined />
						<span id="logo">CAPA 파트너스</span>
					</LogoWrapper>
					<LoginMenu>
						<span>
							<BarcodeOutlined /> <span>A 가공업체</span>
						</span>
						<span>|</span>
						<span>로그아웃</span>
					</LoginMenu>
				</HeaderContentWrapper>
			</HeadDiv>
			{children}
			<Footer></Footer>
		</>
	);
};

export default AppLayout;
