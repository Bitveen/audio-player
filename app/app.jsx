import React from "react";
import { render } from "react-dom";
import { Provider} from "react-redux";
import { configureStore } from "./store/configureStore";

import AudioPlayer from "AudioPlayer";


// Подгружаем Foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");

const store = configureStore();

render(

    <Provider store={store}>
        <AudioPlayer />
    </Provider>

,document.getElementById("app")
);
