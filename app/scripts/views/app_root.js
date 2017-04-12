import React from 'react'
import { connect } from 'react-redux'
import allState from '../containers/all'
import DocumentView from './document_view'
import PromptView from './prompt_view'

const App = React.createClass({


  //iChecked corresponds to state

  render: function () {
    let divClass = 'show-content';
    if (!this.props.iChecked){
      divClass = 'hidden';
    }




    return (
      <div>
        <DocumentView />
        <div className={divClass}>
          <PromptView />
        </div>

      </div>

    );
  }
});

export default connect(allState)(App)
