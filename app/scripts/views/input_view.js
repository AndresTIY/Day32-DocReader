import React from 'react'
// import checkbox from '../actions/checkbox.js'
import reducer from '../reducers/reducer.js'
import store from '../store.js'


// checkedAction = function () {
//   return {
//     type: "CHECKED"
//   }
// }


const InputView = React.createClass({


  checkboxChange: function(e){
    console.log(this.refs.read.checked);


    if (this.refs.read.checked){
      store.dispatch({type: "CHECKED"})
    }

  },




  render: function(){
    let hideClass = "hidden";
    // var checkedValue = document.querySelector('#input:checked').value;
    // console.log(checkedValue);
    let boo = false


    return (
      <div className="inputDiv">
        <label className="">Mark as Read</label>
        <label className={hideClass}>Read</label>
        <input ref="read" id="input" type="checkbox" disabled={boo} onClick={this.checkboxChange} value="">
        </input>
      </div>
    )
  }

})

export default InputView;
