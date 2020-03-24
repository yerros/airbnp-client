import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import alert from "./alertReducer";
import userReducer from "./userReducer";
import cart from "./cartReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ alert, userReducer, cart });
const persistConfig = {
  key: "2",
  storage,
  blacklist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
  const composeEnhancers = composeWithDevTools({});
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
