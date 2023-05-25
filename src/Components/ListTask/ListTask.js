import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

export default function ListTask() {
  const list = useSelector(state=> state.toDoReducer.tasks);
  const [display, setdisplay] = useState("All")
 
 
  return (
    <div>
        <Button variant="outline-secondary"style={{margin:'4px'}} 
                onClick={()=>setdisplay("All")} >ALL</Button>
        <Button variant="outline-secondary"style={{margin:'4px'}}
                onClick={()=>setdisplay("Done")}>Done</Button>
        <Button variant="outline-secondary"style={{margin:'4px'}}
                onClick={()=>setdisplay("Undone")}>Undone</Button>
        <hr/>
        {display === "Done" 
        ?list
         .filter(el => el.isDone === true)
         .map(el=> <Task task={el} key={el.id}/>)
        :display === "Undone"
        ? list
          .filter(el=> el.isDone === false)
          .map(el=> <Task task={el} key={el.id}/>)
        :list.map(el => <Task task={el} key={el.id}/>)}
       
    </div>
  )
}
