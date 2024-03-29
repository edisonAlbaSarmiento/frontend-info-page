import styled from 'styled-components';
import { prop } from 'styled-tools';

export const CotentFooter = styled.footer`
	background-color: black;
	position: absolute;
	width: 100%;
	height: 15%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	bottom: 0;
	@media (max-width: 768px) {
		padding: 6% 0 6% 0;
		position: inherit;
	}
`;

export const ContentMain = styled.div`
	width: 48%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 2%;
	}
`;

export const ContentChildren = styled.div`
	padding-top: 1%;
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Redirect = styled.a`
	color: ${prop('theme.color.white')};
	text-decoration: none;
`;
