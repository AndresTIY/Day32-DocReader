import React from 'react'
import reducer from '../reducers/reducer.js'
import store from '../store.js'
import { connect } from 'react-redux'
import allState from '../containers/all'


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

    let readClass = "hidden";
    let markClass;
    let boo = false
    let checkDisplay = false;

    if (this.props.cancel) {
      checkDisplay = false;
    }

    if (this.props.confirm){
      readClass = "";
      markClass = "hidden";
      boo = true;
      checkDisplay = true;
    }

    return (
      <div className="inputDiv">
        <label className={markClass}>Mark as Read</label>
        <label className={readClass}>Read</label>
        <input checked={checkDisplay} ref="read" id="input" type="checkbox"
        disabled={boo} onClick={this.checkboxChange} value="">
        </input>
      </div>
    )
  }

})

// export default InputView;
export default connect(allState)(InputView)
