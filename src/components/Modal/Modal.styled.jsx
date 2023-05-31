import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	overflow-y: hidden;
	top: 0;
	left: 0;
	display: ${(props) => (props.opener === true ? 'block' : 'none')};
	width: 100vw;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.5);
`;
