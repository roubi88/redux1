import React, { useState } from 'react'
import { Form, Container, Button, Col,Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/Actions/todoList';


export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch= useDispatch()
  const handleAdd =(e)=>{
     e.preventDefault();
     if (text){
      dispatch(addTask({id:Math.random(), text, isDone:false}));
      setText('');
     }
     else{
      alert('Can not add an empty text!');
     }      
  }

  return (
    <div>
    <Container style={{background:'gray', padding:'3%', borderRadius:'10px', margin:"5%"}}>
        <Row>
        <Col xs={12} md={8}>
         <Form.Control type="text" 
          placeholder='Enter your task' 
          value={text}  
          onChange={(e)=>setText(e.target.value)}/>
        </Col>
        <Col xs={6} md={4}>
              <Button variant="primary"
               type="submit" 
               onClick={handleAdd}>
                 Add
              </Button>
        </Col>
      </Row>  
   </Container>
   </div>
  )
}
