import React from 'react'
import allState from '../containers/all.js'



const PromptView = React.createClass({
  // constructor(props){
  //   super(props)
  //   this.state = {isModalOpen: false}
  // }




  render: function(){

    return (
      <div>
      <div className="backdrop"></div>

        <div className="modal">
          <p>Are you sure you read this?</p>
          <button>Confirm</button>
          <button>Cancel</button>
        </div>
      </div>

    )
  }

})

export default PromptView;
