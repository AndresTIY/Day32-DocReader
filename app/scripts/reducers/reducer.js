import InputView from '../views/input_view'
import { createStore, applyMiddleware } from 'redux'
import logger from '../middleware/logger.js'
import store from '../store.js'

const initialState = {
  iChecked: true,
  confirm: false,
  cancel: false,
}

export default function reducer (currentState, action) {
  if (currentState === undefined){
    return initialState;
  }

  switch(action.type){
    case "CHECKED":
      return Object.assign({}, currentState, {
        iChecked: !currentState.iChecked
      });

    case "CONFIRM":
      console.log("Confirm type dispatched");
      return Object.assign({}, currentState, {
        iChecked: !currentState.iChecked,
        confirm: !currentState.confirm
      });

    case "CANCEL":
      return Object.assign({}, currentState, {
        iChecked: !currentState.iChecked,
        cancel: !currentState.cancel
      });

    default:
      return currentState;

  }//end of switch





  return state;
}//end of export
