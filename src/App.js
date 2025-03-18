import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar el curso de Intro a React.js", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "lalalala", completed: false },
];

function App() {
	return (
		<React.Fragment>
			{/* Estructura de la aplicacion */}

			{/* Contador de to do */}
			<TodoCounter completed={16} total={25} />

			{/* Input de filtrar */}
			<TodoSearch />

			{/* Lista de to do */}
			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>

			{/* Creador de to do */}
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
