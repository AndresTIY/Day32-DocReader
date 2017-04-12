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
    //bring up pop up window
      console.log("Checked type dispatched");

      return Object.assign({}, currentState, {
        iChecked: !currentState.iChecked
      });

    case "CONFIRM":
    //disables checkbox
      console.log("Confirm type dispatched");
      return Object.assign({}, currentState, {
      });

    case "CANCEL":
      //hides pop up window
      console.log("Cancel type dispatched");
      return Object.assign({}, currentState, {
        iChecked: !currentState.iChecked,
        cancel: !currentState.cancel
      });

    default:
      return currentState;

  }//end of switch





  return state;
}//end of export
