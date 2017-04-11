import React from 'react'
import Paragraph from './paragraph.js'
import InputView from './input_view.js'

const DocumentView = React.createClass({


  render: function(){
    return (
      <div className="doc">
        <article>
          <Paragraph />
        </article>
        <InputView />
      </div>


    )
  }

})

export default DocumentView;
