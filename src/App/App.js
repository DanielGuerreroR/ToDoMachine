import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { useLocalStorage } from "./UseLocalStorage";

//Array con TODOS de prueba
const defaultTodos = [
	{ text: "Cortar cebolla", completed: true },
	{ text: "Tomar el curso de Intro a React.js", completed: false },
	{ text: "Llorar con la llorona", completed: false },
	{ text: "LALALALALALA", completed: false },
	{ text: "usar estados derivados", completed: true },
];
//Comando de crear
//localStorage.setItem('TODOS_V1',defaultTodos)
//Comando de borrar
//localStorage.removeItem('TODOS_V1')

function App() {
	//Estado de Todos
	const [todos, saveTodos] = useLocalStorage("TODOS_V1", defaultTodos);

	//Estado del Componente TodoSearch
	const [searchValue, setSearchValue] = React.useState("");
	console.log("Los usuarios buscan todos de " + searchValue);

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

	//Funcion actualizadora de estado
	const completeTodo = (text) => {
		//Nuevo array de todos
		const newTodos = [...todos];
		//Saber cual todo modificar
		const todoIndex = newTodos.findIndex((todo) => todo.text == text);
		//Actualizar estado de Todo
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
		//Mandar nuevo array al actualizador
		saveTodos(newTodos);
	};

	//Funcion Borradora de ToDos
	const deleteTodo = (text) => {
		//Nuevo array de todos
		const newTodos = [...todos];
		//Saber cual todo modificar
		const todoIndex = newTodos.findIndex((todo) => todo.text == text);
		//Eliminar Todo del Array
		//Metodo para cortar elementos (indice,cantidad de elementos a retirar)
		newTodos.splice(todoIndex, 1);
		//Mandar nuevo array al actualizador
		saveTodos(newTodos);
	};

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
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			{/* Creador de to do */}
			<CreateTodoButton />
		</>
	);
}

export default App;
