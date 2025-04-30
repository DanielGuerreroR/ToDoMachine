import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
	const { addTodo, setOpenModal } = React.useContext(TodoContext);

	//Estado Local textarea
	const [newTodoValue, setNewTodoValue] = React.useState("");

	//Funcion para boton de enviar
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};
	//Funcion para boton de cancelar
	const onCancel = () => {
		setOpenModal(false);
	};

	//Funcion para escritura de textarea
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo To Do</label>
			<textarea
				placeholder="Cortar cebolla para el almuerzo"
				value={newTodoValue}
				onChange={onChange}
				required //para no enviar todos vacios
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					onClick={onCancel}
					className="TodoForm-button TodoForm-button--cancel">
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button--add">
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
