import React from "react";
import Header from "./components/Header";
import Booking from "./components/Booking";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen p-5">
      <Header />
      <div className="p-20">
        <Booking />
      </div>
    </div>
  );
};

export default App;
