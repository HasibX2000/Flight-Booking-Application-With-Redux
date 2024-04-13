import React from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";
import ListHeading from "./components/ListHeading";
import BookingDetails from "./components/BookingDetails";
import { useSelector } from "react-redux";

const App = () => {
  const bookingData = useSelector((state) => state.value);

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full lg:h-screen p-5">
      <Header />
      <div className="p-20">
        <Booking />
        <div className="mt-5 rounded-xl">
          <ListHeading />
          <div className="bg-white rounded-b-xl">
            {bookingData.map((bookingData) => (
              <BookingDetails key={Math.random()} bookingData={bookingData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
