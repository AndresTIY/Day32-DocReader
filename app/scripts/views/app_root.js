import React from 'react'
import { connect } from 'react-redux'
import allState from '../containers/all.js'
import DocumentView from './document_view'

const App = React.createClass({
  render: function () {
    return (
      <DocumentView />
    );
  }
});

export default connect(allState)(App)
