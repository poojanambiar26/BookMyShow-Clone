import React from "react";
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from "./arrows";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () =>{
    const settingsLg ={
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }
    const settings = {
        arrows:true,       
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };

      const images =[
    
        "https://images.unsplash.com/photo-1681549734363-5c8a06428d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        "https://images.unsplash.com/photo-1681318655864-843a37484f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1681151510371-3f07fd29235a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1681609092173-913a55a786c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1681581718209-f9f23be7f679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
      ]
      return(
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map((image)=> (
                    <div className="w-full h-64 md:h-80 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-sm"/>
                    </div>
                ))

            }
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
            {
                images.map((image)=> (
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt="testing" className="w-full h-full rounded-sm"/>
                    </div>
                ))

            }
        </HeroSlider>
        </div>

        </>
      )
};

export default HeroCarousel;



// http://kenwheeler.github.io/slick/