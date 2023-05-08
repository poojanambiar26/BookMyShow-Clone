import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import MovieHero from "../Components/MovieHero/Moviehero_comp";
import { BiCameraMovie } from "react-icons/bi";
import PosterSlider from "../Components/PosterSlider/PosterSlider.comp";
const MoviePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  console.log({ popularMovies });
  return (
    <>
      <MovieHero />
      <div className="my-12 container mx-auto px-5 lg:w-2/3 lg:ml-30">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as
            Shang-Chi, who must confront the past he thought he left behind when
            he is drawn into the web of the mysterious Ten Rings organization.
            The film is directed by Destin Daniel Cretton and produced by Kevin
            Feige and Jonathan Schwartz.
          </p>
        </div>
        <div className="my-8">
          <hr></hr>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">
            Applicable Offers
          </h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
            <div className="w-8 h-8">
              <BiCameraMovie className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
              <p className="text-gray-600 text-sm">
                Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                Pass @Rs.99
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
        <PosterSlider
          images={popularMovies}
          title="Recommended Movies"
          isDark={false}
        />
      </div>
      </div>
    </>
  );
};

export default MoviePage;

