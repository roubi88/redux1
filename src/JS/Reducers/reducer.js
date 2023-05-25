import {ADD_TASK, DONE_TASK, EDIT_TASK} from "../ActionType/actionTypes";
import {DELETE_TASK} from '../ActionType/actionTypes';

const initialState = {
  tasks: [
    {id:Math.random(),
     text: 'Task1',
     isDone: false},
     
     {id:Math.random(),
      text: 'Task2',
      isDone: false}
    
    ],
};

const toDoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(el => el.id !== payload)],
      };
      case DONE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((el)=>
            el.id === payload ? { ...el, isDone: !el.isDone }:el),
        
        };
      
      case EDIT_TASK:
        return{
          ...state, 
          tasks: state.tasks.map((el) =>
            el.id === payload.id ? { ...el, text: payload.newText }:el)
             };
                       
    default:
      return state;
  }
};

export default toDoReducer;
