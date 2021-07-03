import React from 'react';

import {
	TitleWrapper,
	ConditionWrapper,
	SelectorWrapper,
	ResetWrapper,
	StyledRedoOutlined,
} from './styles';

import MethodSelector from '../MethodSelector/MethodSelector';
import MaterialSelector from '../MaterialSelector/MaterialSelector';
import StatusSelector from '../StatusSelector/StatusSelector';

const Title = () => {
	return (
		<TitleWrapper>
			<div>
				<div className="title">들어온 요청</div>
				<div className="description">파트너님에게 딱 맞는 요청서를 찾아보세요.</div>
			</div>
			<ConditionWrapper>
				<SelectorWrapper>
					<MethodSelector />
					<MaterialSelector />
					<ResetWrapper>
						<StyledRedoOutlined />
						<span> 필터링 리셋</span>
					</ResetWrapper>
				</SelectorWrapper>
				<StatusSelector />
			</ConditionWrapper>
		</TitleWrapper>
	);
};

export default Title;
