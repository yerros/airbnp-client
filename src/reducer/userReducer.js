import {
  SET_USER,
  REMOVE_USER,
  SET_DURATION,
  SET_DATE
} from "../actions/types";

const initialState = {
  user: "",
  duration: 0,
  date: "",
  isLogin: false
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        isLogin: true
      };
    case REMOVE_USER:
      return {
        ...state,
        user: "",
        isLogin: false
      };
    case SET_DURATION: {
      return {
        ...state,
        duration: action.payload
      };
    }
    case SET_DATE: {
      return {
        ...state,
        date: action.payload
      };
    }
    default:
      return state;
  }
};

export default user;
