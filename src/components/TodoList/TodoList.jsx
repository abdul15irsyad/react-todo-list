import React from 'react'
import './TodoList.css'

const TodoList = (props) => {
	const todos = props.list.length ? (
		props.list.map(todo => {
			return(
				<ul key={todo.id}>
					<li>
						{todo.content}
						<span onClick={()=>props.removeList(todo.id)}>
							<i className="remove-icon fas fa-times"></i>
						</span>
					</li>
				</ul>
			)
		})
	) : (
		<p className="empty-list">Yeay all your work is done !</p>
	)
	return todos
}

export default TodoList