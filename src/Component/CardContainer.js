import React from 'react'
import './CardContainer.css'
import AddTodoList from './AddTodoList'
import TodoList from './TodoList'
function CardContainer(props) {
    let DeleteHandler=(key)=>{
        console.log(key);
        const list=[...props.list];
        const newlist=list.filter(item=>{
            return item.id!==key
        })
        props.setTodos(
            newlist
        )
        
    }
    let EditHandler=(key)=>{
        const newVal=prompt("Please Enter the Task");
        console.log(key);
        let list=[...props.list];
        if(newVal!=''||newVal.trim()!=''){
            // let udpatedTodos=[...list]
            list[key-1].task=newVal;
            props.setTodos(
                list
             )
        }
        
        
     }
    if(props.isList===true){
       const value= props.list.map(item=> (
                <div className='card-container'>
                    <TodoList funEdit={EditHandler} funDel={DeleteHandler} key={item.id} task={item.task} id={item.id}></TodoList>
                </div>
            ))
            return value
        }
     
        if(props.isList===false){
            return (
            <div className='card-container'>
            <AddTodoList  list={props.list} setTodos={props.setTodos}></AddTodoList>
            
            </div>
            )
            }
       
}

export default CardContainer