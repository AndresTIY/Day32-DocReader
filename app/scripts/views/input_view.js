import React from 'react'
import checkbox from '../actions/checkbox.js'


const InputView = React.createClass({


  // checkboxChange: function(e){
  //   if (document.getElementById('input').checked){
  //     console.log('yay');
  //   }
  //
  // },




  render: function(){
    let hideClass = "hidden";
    // var checkedValue = document.querySelector('#input:checked').value;
    // console.log(checkedValue);


    return (
      <div className="inputDiv">
        <label className="">Mark as Read</label>
        <label className={hideClass}>Read</label>
        <input id="input" type="checkbox" onClick={this.checkboxChange} value="">
        </input>
      </div>
    )
  }

})

export default InputView;
