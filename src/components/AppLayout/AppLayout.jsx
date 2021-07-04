import React, { useState, useCallback } from 'react';
import { BarcodeOutlined } from '@ant-design/icons';

import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import { HeadDiv, HeaderContentWrapper, LoginMenu, LogoWrapper, GlobalLayout } from './style';

const AppLayout = ({ children }) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const onClickButton = useCallback(() => {
		setIsMenuOpened(state => !state);
	}, []);

	const onClickBackground = useCallback(() => {
		setIsMenuOpened(state => !state);
	}, []);

	return (
		<>
			{isMenuOpened && <Menu onClickBackground={onClickBackground} />}
			<GlobalLayout>
				<HeadDiv>
					<HeaderContentWrapper>
						<LogoWrapper>
							<ShowMoreButton onClickButton={onClickButton} />
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
			</GlobalLayout>
		</>
	);
};

export default AppLayout;
