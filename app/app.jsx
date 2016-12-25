import React from "react";
import { render } from "react-dom";
import { Provider} from "react-redux";
import { configureStore } from "./store/configureStore";

import AudioPlayer from "AudioPlayer";


// Подгружаем Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");

require("style!css!sass!styles/app.scss");

const store = configureStore();
store.subscribe(() => {
    console.log("State changed ", store.getState());
});

render(

    <Provider store={store}>
        <AudioPlayer />
    </Provider>

,document.getElementById("app")
);
