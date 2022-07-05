import React from 'react';
import App from './app';
import 'normalize.css';
import {GlobalStyles} from './global-styles';
import {createRoot} from 'react-dom/client';
import { firebase } from './lib/firebase.prod';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <>
        <GlobalStyles />
        <App />
    </>
);