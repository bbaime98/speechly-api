import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="51b8ca14-5a96-43bc-a282-200417a97ca5" language="en-US">
    <Router>
    <Provider>
        <App />
    </Provider>
    </Router>
    </SpeechProvider>,
  document.getElementById('root'),
);
