import {useState} from "react"

const Todo=(props)=>{
	const [firstName,setFirstName] = useState("abc")
	
	  	const handleChange=(e)=>{
	  		const firstName = e.target.value;
	  		setFirstName(firstName)
	  	}
	 const 	handleTodoClick=()=>{
	 		props.callback(firstName)

	  	}
	return(
		<div>
			<input name="firstName" value={firstName}  onChange={handleChange}/>
			<button onClick={handleTodoClick.bind(this)}>AddItem</button>		
			<p>{firstName}</p>
		</div>

		)
}
export default Todo;

