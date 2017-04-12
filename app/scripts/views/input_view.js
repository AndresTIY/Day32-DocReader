import React from 'react'
import reducer from '../reducers/reducer.js'
import store from '../store.js'
import { connect } from 'react-redux'



// checkedAction = function () {
//   return {
//     type: "CHECKED"
//   }
// }


const InputView = React.createClass({


  checkboxChange: function(e){
    let isChecked = this.refs.read.checked;//corresponds to actual check

    if (isChecked){
      store.dispatch({type: "CHECKED"})
    }


  },

  render: function(){

    let hideClass = "hidden";
    let boo = false
    let checkDisplay = false;

    if (this.props.cancel) {
      checkDisplay = false;
    }

    return (
      <div className="inputDiv">
        <label className="">Mark as Read</label>
        <label className={hideClass}>Read</label>
        <input checked={checkDisplay} ref="read" id="input" type="checkbox"
        disabled={boo} onClick={this.checkboxChange} value="">
        </input>
      </div>
    )
  }

})

export default InputView;
