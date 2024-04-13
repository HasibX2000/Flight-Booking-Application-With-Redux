/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { removeBooking } from "../redux/actions";

const BookingDetails = ({ bookingData }) => {
  const {
    destinationfrom,
    destinationto,
    journeydate,
    persons,
    flightclass,
    id,
  } = bookingData;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeBooking(id));
  };

  return (
    <div className="flex justify-between bg-white p-5 rounded-b-xl ">
      <h3 className="w-1/6">{destinationfrom}</h3>
      <h3 className="lg:w-1/6">{destinationto}</h3>
      <h3 className="lg:w-1/6 text-start lg:text-center">{journeydate}</h3>
      <h3 className="lg:w-1/6 text-center">{persons}</h3>
      <h3 className="lg:w-1/6 text-center">{flightclass}</h3>
      <button className="lg:w-1/6 text-center ">
        <span
          onClick={deleteHandler}
          className="bi bi-trash bg-gray-200 p-2 text-red-600 hover:bg-red-600 hover:text-white duration-150 rounded-sm"
        ></span>
      </button>
    </div>
  );
};

export default BookingDetails;
