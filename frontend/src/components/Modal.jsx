import React, { useEffect } from 'react';
import Modal from 'react-modal';

const customStyles = {
	content: {
		display: 'flex',
		'justify-content': 'space-between',
		'align-items': 'center',
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
		console.log(props.student.name)
	}, [])

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button onClick={closeModal}>X</button>
				<h2>{props.student.name}</h2>
				<p>Projeto: {props.student.project}</p>
				<p>Nota: {(props.student.grade * 100)}%</p>
			</Modal>
		</div>
	);
}
