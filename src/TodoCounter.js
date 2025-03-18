function TodoCounter(props) {
	return (
		<h1>
			Completaste
			{props.completed} de
			{props.total} TODOs
		</h1>
	);
}
