import React from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard";
import Premier from "../Components/Premier/Premier";
import PosterSlider from "../Components/PosterSlider/PosterSlider.comp";
import PremierImages from "../config/tempPosters.config";

const HomePage = () => {
  return (
    <>
    
   <div className="flex flex-col gap-5">
   <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800 px-4 py-4">
         The best of Entertainment
      </h1>
      <EntertainmentCardSlider />
      
   </div>
   <div className="bg-navColor-50 py-16">
    
    <div className="container mx-auto px-4">
    <div className="flex">
<img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
alt="rupay" className="w-full h-full"/>
    </div>
    <PosterSlider images={PremierImages} title="Premiers" subtitle ="Brand new Releases every Friday" isDark/>
    </div>
   </div>
   </div>
   <div className="container mx-auto px-4">
    <PosterSlider images={PremierImages} title="Online Streaming Events" isDark={false}/>
   </div>

   <div className="container mx-auto px-4">
    <PosterSlider images={PremierImages} title="Outdoor Events" isDark={false}/>
   </div>
    </>
  )
};

export default HomePage;
