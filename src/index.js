import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App';

import store from "./reduxi/reduxi-store";
import {Provider} from "react-redux";

const rootElement =
    document.getElementById('root');
const root = createRoot(rootElement);


let rerenderTree = () =>{
    root.render(<Provider store = {store}>  <App/> </Provider>);
}

rerenderTree()

store.subscribe( () => {rerenderTree()})
