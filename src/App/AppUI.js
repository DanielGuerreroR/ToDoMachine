import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";

function AppUI({
	completedTodos,
	totalTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo,
}) {
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

export { AppUI };
