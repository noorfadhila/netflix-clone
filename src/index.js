import React from 'react';
import App from './app';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<>
    <GlobalStyles />
    <App />
</>
);