import logo from "./platzi.webp";
import "./App.css";
import { TodoItem } from "./TodoItem";

function App() {
	return (
		<div className="App">
			<TodoCount completed={3} total={5} />

			<TodoItem />
			<TodoItem />
			<TodoItem />

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edita el archivo <code>src/App.js</code> y guarda para recargar.
				</p>
				<a
					className="App-link"
					href="https://platzi.com/reactjs"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
