import './bootstrap';
import Prices from './components/Prices';
import {createRoot} from "react-dom/client";
import React from "react";
import {Provider} from "react-redux";

import store from "./store/store";

if (document.getElementById('root')) {
    const root = createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <Prices />
        </Provider>
    );
}
