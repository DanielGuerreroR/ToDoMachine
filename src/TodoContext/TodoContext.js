import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	//Estado de Todos
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);

	//Estado del Componente TodoSearch
	const [searchValue, setSearchValue] = React.useState("");
	console.log("Los usuarios buscan todos de " + searchValue);

	//Estado para abrir y cerrar modal
	const [openModal, setOpenModal] = React.useState(false);

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
		<TodoContext.Provider
			value={{
				completedTodos,
				totalTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				completeTodo,
				deleteTodo,
				loading,
				error,
				openModal,
				setOpenModal,
			}}>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
