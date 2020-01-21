import React from 'react'
import './TodoList.css'

const TodoList = (props) => {
	console.log(props.list)
	const todos = props.list.length ? (
		props.list.map(todo => {
			return(
				<li key={todo.id}>
					<span>{todo.content}</span>
					<span onClick={()=>props.removeList(todo.id)}>
						<i className="remove-icon fas fa-check"></i>
					</span>
				</li>
			)
		})
	) : (
		<p className="empty-list text-center">Yeay all your work is done !</p>
	)
	return todos
}

export default TodoList