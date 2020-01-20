import React from 'react'
import './TodoList.css'

const TodoList = ({list}) => {
	const todos = list.length ? (
		list.map(todo => {
			return(
				<ul>
					<li>
						{todo}
						<span>
							<i class="remove-icon fas fa-times"></i>
						</span>
					</li>
				</ul>
			)
		})
	) : (
		<p>Yeay all your work is done !</p>
	)
	return todos
}

export default TodoList