import { ModalWrapper } from './Modal.styled';

export const Modal = ({ children, modal }) => {
	return <ModalWrapper opener={modal}>{children}</ModalWrapper>;
};
