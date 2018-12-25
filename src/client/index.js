import css from '../../static/app.css';
import AppModel from "./app/app-model";
import ReactDOM from 'react-dom'
import React from 'react'

AppModel().subscribe(vdom => ReactDOM.render(vdom, document.getElementById("root")));
