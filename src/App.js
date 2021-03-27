import './App.css';
import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import {useState} from "react"
import UpdateTodo from "./components/UpdateTodo"

function App() {
  const [state,setState] =useState({
      dataItem:[]
    })
  const [update,setUpdate]=useState({
    updateObj:{

    }
  })
  
  const handleTodo=(data)=>{
    // console.log(data)
   const dataItem=state.dataItem
   dataItem.push(data)
   setState({
    dataItem:dataItem
   })
  }
    const handleRemove=(i)=>{
      console.log(i)
      const dataItem=state.dataItem
      dataItem.splice(i,1)
      setState({
        dataItem
      })
    }
   const handleUpdate=(ele,i)=>{
    console.log(ele,i)
    setUpdate({
         updateObj:{
           "ele":ele,
           "id":i
         }
    })

   }
   const handleUpdateTodo=(index,newValue)=>{
    console.log(index,newValue)
    const dataItem=[...state.dataItem]
      dataItem[index]=newValue
      setState({
        dataItem
      })

   }
  
  return (
    <div className="App">
    <Todo callback={handleTodo}/>
    <TodoList data={state.dataItem} callback={handleRemove} 
    callbackUpdate={handleUpdate}/>
    <UpdateTodo callback={handleUpdateTodo} updatedata={update}/>
    </div>
  );
}

export default App;
