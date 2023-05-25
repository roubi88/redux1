import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/todoList';

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState(task.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, newTask));
    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" style={{ margin: '4px' }} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a task</Modal.Title>
        </Modal.Header>
        <Form.Control type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
