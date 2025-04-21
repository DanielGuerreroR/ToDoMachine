import { CompleteIcon } from "../TodoIcon/CompleteIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<CompleteIcon completed={props.completed} onComplete={props.onComplete} />
			{/* <span
				className={`Icon Icon-check ${
					props.completed ? "Icon-check--active" : ""
				} `}
				onClick={props.onComplete}>
				V
			</span> */}
			<p
				className={`TodoItem-p ${
					props.completed ? "TodoItem-p--complete" : ""
				} `}>
				{props.text}
			</p>
			<DeleteIcon onDelete={props.onDelete} />
			{/* <span className="Icon Icon-delete" onClick={props.onDelete}>
				x
			</span> */}
		</li>
	);
}

export { TodoItem };
