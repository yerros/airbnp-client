import * as uuid from "uuid";
import {
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_ALERT,
  SET_USER,
  REMOVE_USER,
  ADD_CART,
  REMOVE_CART,
  REMOVE_ALL_CART,
  SET_DURATION,
  SET_DATE
} from "./types";

export const setAlert = (msg, alertType, timeout = 4000) => dispatch => {
  console.log(msg, alertType);
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const deleteAlert = payload => ({
  type: CLEAR_ALERT,
  payload
});

export const setUser = payload => ({
  type: SET_USER,
  payload
});

export const signOut = payload => ({
  type: REMOVE_USER,
  payload
});

export const addCart = payload => ({
  type: ADD_CART,
  payload
});

export const removeCart = payload => ({
  type: REMOVE_CART,
  payload
});

export const removeAllCart = payload => ({
  type: REMOVE_ALL_CART,
  payload
});

export const SetDuration = payload => ({
  type: SET_DURATION,
  payload
});

export const SetDate = payload => ({
  type: SET_DATE,
  payload
});
