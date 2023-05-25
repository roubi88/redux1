import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/todoList';
import "./Task.css";
import EditTask  from '../EditTask/EditTask'

export default function Task({task}) {
  const dispatch = useDispatch();
 
  return (
    <div>
    <Container>
    <Row xs={4} > 
      <Col>
         <h5 className={task.isDone? "done": 'undone'}>{task.text}</h5>   
      </Col>
      <Col>
        <EditTask task={task}/>
      </Col>
      <Col>
         <Button variant="outline-warning" style={{margin:'4px'}} 
         onClick={()=> dispatch(deleteTask(task.id))}> Delete</Button>
    </Col>
    <Col>
         <Button variant='outline-danger'style={{margin:'4px'}} 
         onClick={()=> dispatch(doneTask(task.id))}>{task.isDone? 
         "Undone": 'Done'}</Button>        
    </Col>
    </Row>
   </Container>
    </div>
  )
}
