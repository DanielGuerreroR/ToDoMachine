import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { Modal } from "../Modal/Modal";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoForm } from "../TodoFrom/TodoForm";

function AppUI() {
	const {
		searchedTodos,
		completeTodo,
		deleteTodo,
		loading,
		error,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<>
			{/* Estructura de la aplicacion */}
			{/* Contador de to do */}
			<TodoCounter />
			{/* Input de filtrar */}
			<TodoSearch />
			{/* Lista de to do  */}
			<TodoList>
				{loading && (
					<>
						<TodosLoading />
						<TodosLoading />
						<TodosLoading />
					</>
				)}
				{error && <TodosError />}
				{!loading && searchedTodos.lenght == 0 && <EmptyTodos />}

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
			<CreateTodoButton setOpenModal={setOpenModal} />

			{/* Modal para React Portals */}

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</>
	);
}

export { AppUI };
