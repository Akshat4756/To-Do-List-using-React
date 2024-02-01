import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import './ToDoList.css'
function TodoList(props) {
    let EditHandler=(key)=>{
        props.funEdit(key)
     }
    let DeleteHandler=(key)=>{
       props.funDel(key)
       alert('Deleted Successfully');
    }
            return (
                <div className='ToDoContainer'>
                   <input className='lblTask' disabled type='text' value={props.task}/>
                    <button className='btnEdit'  title='Edit' value={props.id} onClick={()=>EditHandler(props.id)}><FaEdit /></button>
                    <button className='btnDelete' title='Delete' value={props.id} onClick={()=>DeleteHandler(props.id)}><MdDelete /></button>
                </div>
              )
}

export default TodoList