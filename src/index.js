import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './Global.css'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'


const container = document.getElementById('app');


// ReactDOM.render(__que__, __donde__)
ReactDOM.render(<Badges />,container);