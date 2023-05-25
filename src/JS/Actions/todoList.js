import {ADD_TASK}  from '../ActionType/actionTypes';
import {DELETE_TASK} from "../ActionType/actionTypes";
import {DONE_TASK} from "../ActionType/actionTypes";
import { EDIT_TASK } from '../ActionType/actionTypes';
export const addTask = (newTask) =>{
    return{
        type: ADD_TASK,
        payload: newTask,

    };
}
export const deleteTask =(id)=>{
    return{
        type: DELETE_TASK,
        payload:id,
    }
}
export const doneTask = (id) =>{
    return{
        type: DONE_TASK,
        payload: id,
    }
}
export const editTask = (id, newText) =>{
    return{
        type: EDIT_TASK,
        payload: {id,newText},
    }
}


