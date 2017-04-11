import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import AppRoot from './views/app_root.js'
import store from './store.js'

export default function app() {

  render(
    <Provider store={store}>
      <AppRoot />
    </Provider>
    , document.querySelector('#app'));
}
