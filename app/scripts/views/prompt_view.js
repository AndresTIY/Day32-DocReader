import React from 'react'
import allState from '../containers/all.js'
import store from '../store.js'
import { connect } from 'react-redux'





const PromptView = React.createClass({
  confirm: function(){
    console.log('confirm clicked');
    store.dispatch({type:"CONFIRM"})

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

// export default PromptView;
export default connect(allState)(PromptView)
