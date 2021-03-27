import React from "react"

	const TodoList =(props)=>{
		const handleRemoveItem=(i)=>{
			props.callback(i)
		}
		const handleUpdateItem=(ele,i)=>{
			props.callbackUpdate(ele,i)
		}
	
	return(
		<ul>
			{props.data.map((ele,i)=>{
				console.log(ele,i)
				return(
					<div key={i}>
					<li>{ele}
						<button type="button" onClick={handleRemoveItem.bind(this,i)}>X</button>
						<button type="button" onClick={handleUpdateItem.bind(this,ele,i)}>U</button>
					</li>
					</div>
						
					)
			})}
		</ul>
		
		)
}
export default TodoList;
