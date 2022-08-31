import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '40%',
		height: '20%',
	},
};

export default function ModalScreen(props) {
	Modal.setAppElement(document.getElementById('root'));
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(() => {
		openModal();

	}, []);

	function getDate(date) {
		const firstParse = date.replace('T', ' ');
		return firstParse.replace('.000Z', '');
	}

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div>
					<button onClick={closeModal}>X</button>
				</div>
				<div>
					<h1>{props.student.studentName}</h1>
					<h3>Projeto: {props.student.projectName}</h3>
					<h3>Nota: {(props.student.grade * 100)}%</h3>
					<p>Entrega: {getDate(props.student.deliveryDate)}</p>
				</div>
				<div></div>
			</Modal>
		</div>
	);
}
