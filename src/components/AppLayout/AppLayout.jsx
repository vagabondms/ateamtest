import React, { useState, useCallback } from 'react';
import { BarcodeOutlined } from '@ant-design/icons';

import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import { HeadDiv, HeaderContentWrapper, LoginMenu, LogoWrapper, GlobalLayout } from './style';

const AppLayout = ({ children }) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const handleClickShowMoreButton = useCallback(() => {
		setIsMenuOpened(state => !state);
	}, []);

	return (
		<>
			{isMenuOpened && <Modal />}
			<GlobalLayout>
				<HeadDiv>
					<HeaderContentWrapper>
						<LogoWrapper>
							<ShowMoreButton handleClick={handleClickShowMoreButton} />
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
