// resources/js/components/HelloReact.js

import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../store/reducers/RootReducer';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {listActions} from "../store/actions/PriceActions";

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware)
})

export default function HelloReact() {
    const [data, getPrice] = useState('');
    useEffect(() => {
        listActions()
    }, [])
    return (
        <Provider store={store}>
            <h1>Hello React!</h1>
            {data}
        </Provider>
    );
}

if (document.getElementById('root')) {
    const root = createRoot(document.getElementById('root'));
    root.render(<HelloReact/>);
}
