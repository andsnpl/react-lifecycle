import React from 'react';
import {render} from 'react-dom';
import Lifecycle from './components/lifecycle';

var shell = document.createElement('div');
shell.className = 'app-shell';
document.body.appendChild(shell);
render(<Lifecycle />, shell);
