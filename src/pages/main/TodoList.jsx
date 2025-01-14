import TodoListItem from './TodoListItem';
import './Todo.css';

const ToDoList = ({ todoList, setTodoList }) => (
	<div className="todoapp__list">
		<ul className="todoapp__list-ul">
			{todoList && // todoList가 있을때만 출력
				todoList.map((todoItem) => (
					// map을 이용하여 ToDoItem을 출력
					<TodoListItem
						key={todoItem.id}
						todoItem={todoItem}
						todoList={todoList}
						setTodoList={setTodoList}
					/>
				))}
		</ul>
	</div>
);

export default ToDoList;
