import React from 'react'
import allState from '../containers/all.js'
import store from '../store.js'




const PromptView = React.createClass({
  confirm: function(){
    console.log('confirmed');


  },

  cancel: function(){

    store.dispatch({type:"CANCEL"})

  },



  render: function(){

    return (
      <div>
      <div className="backdrop"></div>

        <div className="modal">
          <p>Are you sure you read this?</p>
          <button onClick={this.confirm}>Confirm</button>
          <button onClick={this.cancel}>Cancel</button>
        </div>
      </div>

    )
  }

})

export default PromptView;
