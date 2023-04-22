import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard";
const HomePage = () => {
  return (
    <>
    
   <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800 px-4 py-4">
         The best of Entertainment
      </h1>
      <EntertainmentCardSlider />
   </div>
    </>
  )
};

export default HomePage;
