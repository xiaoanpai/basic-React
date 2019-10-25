import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Clock } from './component/Clock/Clock'

import {DisplayFuncComponents} from './component/Display/Display'


const target = document.getElementById('root')
// ReactDOM.render(DisplayFuncComponents, target);

ReactDOM.render(<App />, target);
// ReactDOM.render(<Clock onClose={() => ReactDOM.unmountComponentAtNode(target)} />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
