import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './main'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
    <Main />,
    document.getElementById("app")
)