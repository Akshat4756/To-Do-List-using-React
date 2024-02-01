import React, { useState } from 'react'
import './Container.css'
import CardContainer from './CardContainer'
function Container() {
    
    const[Todos,setTodos]=useState([
    
    ])
    const[newTodo,setNewTodo]=useState([])
    const[isCompletedScreen,setCompletedScreen]=useState(false)
    // addNewTodo=()=>{

    // }
    // DeleteToDo=(id)=>{

    // }
    // UpdateToDo=(id)=>{
        
    // }
    // UpdateStatusTodo=(id)=>{

    // }
  return (
<div className='container'>
<h1 className='main-head'>To-Do List</h1>
        <CardContainer isList={false} list={Todos} setTodos={setTodos}></CardContainer>
        <h1 className='main-head'>Your To-Do's</h1>
        <CardContainer setTodos={setTodos} list={Todos} isList={true}/>
    </div>
    
    
  )
}

export default Container