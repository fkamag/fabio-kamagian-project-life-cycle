import axios from 'axios';
import React, { useState } from 'react';
import './style.css';

export default function StudentList() {
	const [students, setStudents] = useState([]);
	const [classId, setClassId] = useState(0);

	async function handleData(e) {
		e.preventDefault();

		const response = await axios
			.get(`http://localhost:3001/student/class/${classId}`);

		console.log(response.data);

		setStudents(response.data);
	};

	return (
		<div className="profile-container">
			<form onSubmit={handleData}>
				<input
					placeholder="Id do estudante"
					value={classId}
					onChange={e => setClassId(e.target.value)}
				/>
				<button className="button" type="submit">Buscar</button>
			</form>

			<br></br>
			<br></br>

			{students.length > 1 ? <ul>
				{
					students.map(i => (
						<li key={i.id_student}>
							<strong>Nome </strong>
							<p>{i.name}</p>

							<strong>Email </strong>
							<p>{i.email}</p>

							<strong>Turma </strong>
							<p>{i.id_class}</p>
						</li>
					))
				}
			</ul> : <p>Nenhuma pessoa estudante cadastrada!</p>}
		</div>
	)
};