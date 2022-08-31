import React, { useState } from 'react';
import './style.css';

import ModalScreen from '../../components/Modal';

export default function StudentDataProject() {

	const [studentId, setStudentId] = useState('');
	const [projectId, setProjectId] = useState('');

	const [student, setStudent] = useState({});

	const [modal, setModal] = useState(false);

	function handleData(e) {
		e.preventDefault();

		setStudentId('');
		setProjectId('');

		setStudent({
			name: "Thiago H Mariotto",
			project: "Talker Manager",
			grade: 0.87
		});

		setModal(true);
	}

	return (
		<div className="register-container">
			<div className="content">

				<section>
					<img src="https://www.mystudentplan.ca/_images/student-plan-landing.png" alt="Logo Image" />

					<h1>Buscar informações</h1>
					<p>Encontre a nota de uma pessoa estudante por projeto.</p>

				</section>
				<form onSubmit={handleData}>
					<input
						placeholder="Id do estudante"
						value={studentId}
						onChange={e => setStudentId(e.target.value)}
					/>
					<input type="text"
						placeholder="Id do projeto"
						value={projectId}
						onChange={e => setProjectId(e.target.value)}
					/>

					<button className="button" type="submit">Buscar</button>
				</form>

				{modal && student ? <ModalScreen student={student} /> : console.log(student)}

			</div>
		</div >
	);
}