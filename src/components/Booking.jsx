import React from "react";
import PlusIcon from "../assets/plusicon.svg";

const Booking = () => {
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
  const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const flightClass = ["Economy", "Economy+", "Business", "First Class"];

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-white p-5 rounded-xl">
      <form
        className="flex justify-between items-center"
        onSubmit={HandleSubmit}
      >
        <div className="flex flex-col justify-center w-full gap-5 pr-3 border-r mr-2 border-gray-500">
          <label htmlFor="destinationfrom">Destination From</label>
          <select
            className="focus:outline-none"
            name="destinationfrom"
            id="destinationfrom"
          >
            {destinationfrom.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 border-r mr-2 border-gray-500">
          <label htmlFor="destinationto">Destination To</label>
          <select
            className="focus:outline-none"
            name="destinationto"
            id="destinationto"
          >
            {destinationto.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 border-r mr-2 border-gray-500">
          <label htmlFor="journeydate">Journey Date</label>
          <input
            className="focus:outline-none"
            type="date"
            name="journeydate"
            id="journeydate"
          />
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 border-r mr-2 border-gray-500">
          <label htmlFor="persons">Guests</label>
          <select className="focus:outline-none" name="persons" id="persons">
            {guests.map((item) => (
              <option value={item} key={item}>
                {item} {item === 1 ? "Person" : "Persons"}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center w-full gap-5 pr-3 mr-3 ">
          <label htmlFor="flightClass">Class</label>
          <select
            className="focus:outline-none"
            name="flightClass"
            id="flightClass"
          >
            {flightClass.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="gap-5 w-1/2 flex items-center">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-blue-500 rounded px-8 py-2"
          >
            <img src={PlusIcon} alt="PlusIcon" className="w-5" />
            <span className="font-medium text-lg text-white">Book</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
