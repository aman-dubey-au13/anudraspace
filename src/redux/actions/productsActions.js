import { ActionTypes } from "../constants/action-types";
export const getDatas = (data) => {
    return {
      type: ActionTypes.GET_DATA,
      payload: data,
    };
};
export const getDatasByName = (data) => {
  return {
    type: ActionTypes.GET_DATA_BY_NAME,
    payload: data,
  };
};
  