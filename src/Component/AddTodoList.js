import React from 'react'
import './AddTodoList.css'
import { MdAssignmentAdd } from "react-icons/md";
function AddTodoList(props) {
    let value='';
    const id=0;
    var max=0;
    var value_new ='';
    const inputRef=React.createRef();
    const setTitle=(event)=>{
    value=inputRef.current.value
    
    }
    const addNewTodo=()=>{
        if(value!==''||value.trim()!=''){
            value_new =value;
            console.log(value_new);
            const maxID=props.list.reduce((max,obj)=>(obj.id>max?obj.id:max),0);
            const newid=maxID+1;
            console.log(newid);
            const newTodo={
                id:newid,
                task:value_new
            }
            const list=[...props.list,newTodo]
           props.setTodos(list);
           inputRef.current.value='';
           alert('Task Added ');
        //    console.log(props.list);
        }else{
            alert('Please enter the Task');
        }
    }
  return (
    <div className='AddToDoContainer'>
         <input className='input-task' ref={inputRef} type='text' onChange={setTitle} placeholder='Please Enter the Task'></input>
        <button className='btnAdd' onClick={addNewTodo} title='Add New Task'><MdAssignmentAdd /></button>
    </div>
  )
}

export default AddTodoList