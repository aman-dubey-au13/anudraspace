import { ActionTypes } from "../constants/action-types";
const intialState = {
  data: [],
};

export const dataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_DATA:
      return {...state, data: payload};
    case ActionTypes.GET_DATA_BY_NAME:
      return {...state, data: payload};
    default:
      return state;
  }
};