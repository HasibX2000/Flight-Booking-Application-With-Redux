/* eslint-disable no-case-declarations */
import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = {
  value: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        value: [...state.value, action.payload],
      };

    case DELETE_BOOKING:
      const filteredBookings = state.value.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        value: filteredBookings,
      };

    default:
      return state;
  }
};

export default bookingReducer;
