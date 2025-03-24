import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

//Array con TODOS de prueba
const defaultTodos = [
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar el curso de Intro a React.js", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "LALALALALALA", completed: false },
	{ text: "usar estados derivados", completed: true },
];

function App() {
	//Estado del Componente TodoSearch
	const [searchValue, setSearchValue] = React.useState("");
	console.log("Los usuarios buscan todos de " + searchValue);

	//Estado de Todos
	const [todos, setTodos] = React.useState(defaultTodos);

	//ESTADOS DERIVADOS
	//Todos completados
	//Validamos el estado de completado de los todo y nos devolvera la longitud de array que nos devuelve como verdadero
	let completedTodos = todos.filter((todo) => !!todo.completed).length;
	//Total de todos
	let totalTodos = todos.length;
	//Busqueda de todos
	let searchedTodos = todos.filter((todos) => {
		//traemos el texto de los todo y lo volvemos minuscula
		const todoText = todos.text.toLowerCase();
		//el estado de busqueda lo traemos y lo volvemos minuscula
		const searchText = searchValue.toLowerCase();
		//nos devolvera un array de coincidencias de busqueda de los todos
		return todoText.includes(searchText);
	});

	return (
		<>
			{/* Estructura de la aplicacion */}

			{/* Contador de to do */}
			<TodoCounter completed={completedTodos} total={totalTodos} />

			{/* Input de filtrar */}
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

			{/* Lista de to do */}
			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>

			{/* Creador de to do */}
			<CreateTodoButton />
		</>
	);
}

export default App;
