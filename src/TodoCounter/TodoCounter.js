import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter() {
	const { completedTodos, totalTodos } = React.useContext(TodoContext);

	if (total != completed) {
		return (
			<h1 className="TodoCounter">
				Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
				TODOs
			</h1>
		);
	} else {
		return (
			<h1 className="TodoCounter">
				Felicidades <span>completaste</span> todos los <span>TODOs</span>
			</h1>
		);
	}
}

export { TodoCounter };
