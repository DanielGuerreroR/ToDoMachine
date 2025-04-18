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
//Comando de crear
//localStorage.setItem('TODOS_V1',defaultTodos)
//Comando de borrar
//localStorage.removeItem('TODOS_V1')

function App() {
	//Variable para guardar elmentos de local storage
	const localStorageTodos = localStorage.getItem("TODOS_V1");
	//Revisar contenido en localStorage
	let parsedTodos; //variable de guardar todos

	if (!localStorageTodos) {
		//Si no hay nada en localStorage/no existe
		localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
		parsedTodos = defaultTodos;
	} else {
		//Si tenemos contenido
		//Convertir local storage en JS
		parsedTodos = JSON.parse(localStorageTodos);
	}

	//Estado de Todos
	const [todos, setTodos] = React.useState(parsedTodos);

	//Funcion actualiza estado y localStorage de los todos
	const saveTodos = (newTodos) => {
		//guarda el nuevo array en localstorage
		localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
		//acutaliza el nuevo estado con el nuevo array
		setTodos(newTodos);
	};

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
