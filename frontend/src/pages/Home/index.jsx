import React from 'react';

export default function Home() {
	return (
		<div>
			<h1>Welcome BlackLinters!</h1>
			<br />

			<h3>P. Estudantes</h3>
			<a href="/student/data/project">Nota por pessoa em um projeto</a>
			<br></br>
			<a href="/student/class">Pessoas estudantes por turma</a>
			<p>Cadastrar P. Estudante</p>
			<p>Cadastrar Novos Projetos</p>
			<p>Cadastrar Novos Projetos</p>

			<br />
			<hr></hr>
			<br />

			<h3>Projetos</h3>
			<a href="/project/new/">Cadastrar Projeto</a>
			<p>Listar Projetos</p>

		</div>
	);
}