import axios from 'axios';
import React, { useState } from 'react';
import './style.css';

import ModalScreen from '../../components/Modal';

export default function StudentDataProject() {

	const [studentId, setStudentId] = useState('');
	const [projectId, setProjectId] = useState('');

	const [student, setStudent] = useState({});

	const [modal, setModal] = useState(false);

	async function handleData(e) {
		e.preventDefault();

		const fetch = await axios
			.get(`http://localhost:3001/student/${studentId}/project/${projectId}`);

		if (!fetch.data) {
			alert("Nenhuma entrega registrada!");
			return;
		}

		setStudent(fetch.data);
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

				{modal && student ? <ModalScreen student={student} /> : null}

			</div>
		</div >
	);
}