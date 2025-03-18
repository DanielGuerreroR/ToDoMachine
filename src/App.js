import "./App.css";
import { TodoItem } from "./TodoItem";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";

function App() {
	return (
		<div className="App">
			{/* Estructura de la aplicacion */}

			{/* Contador de to do */}
			<TodoCounter />

			{/* Input de filtrar */}
			<TodoSearch />

			{/* Lista de to do */}
			<TodoList>
				{/* Insertando Componente de React en otro componente de React */}
				<TodoItem />
				{/* Para mostrala varias veces podemos simplemente pegarla varias veces */}
				<TodoItem />
				<TodoItem />
			</TodoList>

			{/* Creador de to do */}
			<CreateTodoButton />
		</div>
	);
}

export default App;
