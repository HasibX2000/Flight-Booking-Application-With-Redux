import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBooking = (value) => {
  return {
    type: ADD_BOOKING,
    payload: value,
  };
};

export const removeBooking = (id) => {
  return {
    type: DELETE_BOOKING,
    payload: id,
  };
};
