import React from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";
import ListHeading from "./components/ListHeading";
import BookingDetails from "./components/BookingDetails";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen p-5">
      <Header />
      <div className="p-20">
        <Booking />
        <div className="mt-5 rounded-xl">
          <ListHeading/>
         <div className="bg-white rounded-b-xl">
         <BookingDetails/>
         <BookingDetails/>
         <BookingDetails/>
         </div>
        </div>
      </div>
    </div>
  );
};

export default App;
