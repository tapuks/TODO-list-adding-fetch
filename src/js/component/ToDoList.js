import { event } from "jquery";
import React from "react";
import { useState, useEffect } from "react";

const ToDoList = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);

	const addTask = e => {
		if (task != "" && e.key === "Enter") {
			console.log("si");
			const newTodos = todos.concat({
				label: task,
				done: false
			});
			// console.log(counter);
			setTodos(newTodos);
			const options = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(todos)
			};

			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/david",
				options
			)
				.then(res => console.log(res))
				.then(json => console.log(json))
				.catch(error => console.log(error));
			console.log(todos);
		}
	};

	const deleteTask = todoLabel => {
		// console.log(todoId);
		const newTodos2 = todos.filter(todo => todo.label !== todoLabel);
		setTodos(newTodos2);

		const options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(todos)
		};

		fetch("https://assets.breatheco.de/apis/fake/todos/user/david", options)
			.then(res => console.log(res))
			.then(json => console.log(json))
			.catch(error => console.log(error));
		console.log(todos);
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/david")
			.then(res => res.json())
			.then(json => setTodos(json))
			.catch(error => console.log("error"));
	}, []);
	console.log("todos", todos);

	return (
		<>
			<h1>Todo List</h1>
			<div className="container">
				<div className="div-input">
					<input
						type="text"
						placeholder="Whats needs to be done"
						onChange={e => setTask(e.target.value)}
						onKeyDown={addTask}
					/>
				</div>
				<div className="div-todos">
					{todos.map(todo => {
						return (
							<li key={todo.length + 1}>
								<span className="li-text">{todo.label}</span>
								<span
									className="button-delete"
									onClick={() => deleteTask(todo.label)}>
									<i className="fas fa-times button-delete"></i>
								</span>
							</li>
						);
					})}
				</div>
				<span>Total:{todos.length}</span>
			</div>
		</>
	);
};

export default ToDoList;
