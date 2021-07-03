import styled from 'styled-components';

export const CardTitleWrapper = styled.div`
	border-width: 1px;
	border-color: #e5e5e5;
	height: 132px;
	border-bottom-style: solid;

	& > .card_status {
		float: right;
		width: 50px;
		height: 24px;
		border-radius: 15px;
		border: 1px solid #ffa000;
		font-weight: 500;
		font-size: 12px;
		color: #ffa000;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	& > .request_title {
		font-weight: bold;
		font-size: 16px;
	}

	& > .request_client {
		font-weight: 500;
		font-size: 14px;
	}

	& > .request_due {
		font-weight: normal;
		font-size: 14px;
		color: #939fa5;
		margin-top: 20px;
	}
`;
