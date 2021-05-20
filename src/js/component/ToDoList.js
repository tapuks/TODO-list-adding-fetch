import React from "react";
import { useState } from "react";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	// fetch("https://assets.breatheco.de/apis/fake/todos/user/david", {
	// 	method: "PUT",
	// 	body: JSON.stringify(todos),
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// })
	// 	.then(resp => {
	// 		console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
	// 		console.log(resp.status); // el código de estado = 200 o código = 400 etc.
	// 		console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
	// 		return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
	// 	})
	// 	.then(data => {
	// 		//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
	// 		console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
	// 	})
	// 	.catch(error => {
	// 		//manejo de errores
	// 		console.log(error);
	// 	});
	let counter = todos.length;
	const addTask = () => {
		if (task != "" && event.key === "Enter") {
			const newTodos = todos.concat({
				title: task,
				id: todos.length + 1
			});
			console.log(counter);
			setTodos(newTodos);
		}
	};
	const deleteTask = todoId => {
		console.log(todoId);
		const newTodos2 = todos.filter(todo => todo.id !== todoId);
		setTodos(newTodos2);
	};

	return (
		<div>
			<div className="contain">
				<h1 className="title">todos</h1>
				<div className="contain-input">
					<input
						type="text"
						value={task}
						placeholder="Whats needs to be done"
						onChange={e => setTask(e.target.value)}
						onKeyDown={addTask}
					/>
				</div>

				<div className="contain-ul">
					<ul>
						{todos.map(todo => {
							return (
								<li key={todo.id}>
									<span className="li-text">
										{todo.title}
									</span>
									<span
										className="button-delete"
										onClick={() => deleteTask(todo.id)}>
										<i className="fas fa-times button-delete"></i>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ToDoList;
