import React from "react";
import ReactDOM from "react-dom";
// Import all css
import "./assets/css/css.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/font-mytravel.css";
import "./assets/css/animate.min.css";
import "./assets/css/hs.megamenu.css";
import "./assets/css/jquery.mCustomScrollbar.css";
import "./assets/css/flatpickr.min.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/slick.css";
import "./assets/css/dzsparallaxer.css";
import "./assets/css/theme.css";

import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./reducer";
import { PersistGate } from "redux-persist/integration/react";

import * as serviceWorker from "./serviceWorker";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
