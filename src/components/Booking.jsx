import React, { useState } from "react";
import PlusIcon from "../assets/plusicon.svg";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const Booking = () => {
  // declaring info
  const destinationfrom = [
    "Dhaka",
    "Barishal",
    "Sylhet",
    "Bogra",
    "Noakhali",
    "Feni",
    "Chittagong",
    "Gazipur",
    "Rajshahi",
    "Rangpur",
    "Kishoreganj",
    "Jhalokati",
    "Kurigram",
    "Lakshmipur",
  ];
  const destinationto = [
    "Barishal",
    "Dhaka",
    "Sylhet",
    "Bogra",
    "Noakhali",
    "Feni",
    "Chittagong",
    "Gazipur",
    "Rajshahi",
    "Rangpur",
    "Kishoreganj",
    "Jhalokati",
    "Kurigram",
    "Lakshmipur",
  ];
  const guests = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const flightClass = ["Economy", "Economy+", "Business", "First Class"];

  const date = new Date().toISOString().slice(0, 10);
  const totalLimit = useSelector((state) => state.value.length);
  const initialBookingState = {
    destinationfrom: "Dhaka",
    destinationto: "Barishal",
    journeydate: date,
    persons: 1,
    flightclass: "Economy",
    id: uuidv4(), // Generate unique ID
  };

  const [bookingValues, setBookingValues] = useState(initialBookingState);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setBookingValues(initialBookingState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookingValues = {
      ...bookingValues,
      id: uuidv4(), // Generate unique flightId using uuid
    };
    dispatch(addBooking(newBookingValues));
    setBookingValues({
      destinationfrom: "Dhaka",
      destinationto: "Barishal",
      journeydate: date,
      persons: "1",
      flightclass: "Economy",
    });
    resetForm();
  };

  return (
    <div className="bg-white p-5 rounded-xl">
      <form
        className="flex form flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-center w-full gap-5 pr-3 lg:border-r mr-2 border-gray-500">
          <label htmlFor="destinationfrom">Destination From</label>
          <select
            className="focus:outline-none"
            name="destinationfrom"
            value={bookingValues.destinationfrom}
            onChange={handleInputChange}
            id="destinationfrom"
          >
            {destinationfrom.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 lg:border-r mr-2 border-gray-500">
          <label htmlFor="destinationto">Destination To</label>
          <select
            className="focus:outline-none"
            name="destinationto"
            value={bookingValues.destinationto}
            onChange={handleInputChange}
            id="destinationto"
          >
            {destinationto.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 lg:border-r mr-2 border-gray-500">
          <label htmlFor="journeydate">Journey Date</label>
          <input
            className="focus:outline-none"
            type="date"
            name="journeydate"
            value={bookingValues.journeydate}
            onChange={handleInputChange}
            id="journeydate"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 lg:border-r mr-2 border-gray-500">
          <label htmlFor="persons">Guests</label>
          <select
            className="focus:outline-none"
            name="persons"
            value={bookingValues.persons}
            onChange={handleInputChange}
            id="persons"
          >
            {guests.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 mr-3 ">
          <label htmlFor="flightClass">Class</label>
          <select
            className="focus:outline-none"
            name="flightclass"
            value={bookingValues.flightclass}
            onChange={handleInputChange}
            id="flightclass"
          >
            {flightClass.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="gap-5 lg:w-1/2 flex items-center">
          {totalLimit < 3 ? (
            <button
              type="submit"
              className="flex justify-center items-center gap-2 bg-blue-500 rounded px-8 py-2"
            >
              <img src={PlusIcon} alt="PlusIcon" className="w-5" />
              <span className="font-medium text-lg text-white">Book</span>
            </button>
          ) : (
            <button
              disabled
              className="flex justify-center items-center gap-2 bg-blue-300 rounded px-8 py-2 cursor-not-allowed"
            >
              <img src={PlusIcon} alt="PlusIcon" className="w-5" />
              <span className="font-medium text-lg text-white">Book</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Booking;
