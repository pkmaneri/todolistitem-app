import React,{useState,useEffect} from "react"

	const UpdateTodo=(props)=>{
	const[inputName,setInputName]=useState()

	
	const handleChange=(e)=>{
		const inputName = e.target.value;
		setInputName(inputName)
	}
	 useEffect(()=>{
	 	setInputName(props?.updatedata?.updateObj?.ele)

	 },[props])
	 const handleClickUpdate=(ele,id)=>{
	 	props.callback(props?.updatedata?.updateObj?.id,inputName)

	 }
	return(
		<div>
			<input type="inputName" value={inputName} onChange={handleChange}/>
			<button type="button" onClick={handleClickUpdate.bind(this)}>UpdateItem</button>
		</div>
		)
}
export default UpdateTodo;