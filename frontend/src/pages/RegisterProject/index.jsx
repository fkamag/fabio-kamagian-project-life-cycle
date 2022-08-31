import axios from 'axios';
import React, { useState } from 'react';
import './style.css';


export default function RegisterProject() {

	const [projectName, setProjectName] = useState('');
	const [projectDesc, setProjectDesc] = useState('');
	const [projectReq, setProjectReq] = useState('');
	const [projectModule, setProjectModule] = useState('');

	const [response, setResponse] = useState(undefined);

	async function handleData(e) {
		e.preventDefault();

		const response = await axios
			.post('http://localhost:3001/project',
				{
					name: projectName,
					description: projectDesc,
					requirements: projectReq,
					id_module: projectModule
				}, // body
				{
					headers: {
						'Content-Type': 'application/json',
						authorization: 'nknag5oilfk'
					}
				}
			);

		setResponse(response.data.id);
		alert(`Projeto ${response.data.id} registrado com sucesso!}`)
	}

	return (
		<div className="register-container">
			<div className="content">

				<section>
					<img src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" alt="Logo Image" />

					<h1>Cadastrar um novo Projeto</h1>

				</section>
				<form onSubmit={handleData}>
					<input
						placeholder="Nome do Projeto"
						value={projectName}
						onChange={e => setProjectName(e.target.value)}
					/>

					<input type="textarea"
						placeholder="Descrição"
						value={projectDesc}
						onChange={e => setProjectDesc(e.target.value)}
					/>

					<input type="text"
						placeholder="Requisitos totais"
						value={projectReq}
						onChange={e => setProjectReq(e.target.value)}
					/>

					<input type="text"
						placeholder="Módulo"
						value={projectModule}
						onChange={e => setProjectModule(e.target.value)}
					/>

					<button className="button" type="submit">Registrar</button>
				</form>

				{response ? alert(`Novo projeto de id: ${response}`) : null}

			</div>
		</div >
	);
}