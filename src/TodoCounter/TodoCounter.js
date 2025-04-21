import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
	if (total != completed) {
		return (
			<h1 className="TodoCounter">
				Completaste <span>{completed}</span> de <span>{total}</span> TODOs
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
