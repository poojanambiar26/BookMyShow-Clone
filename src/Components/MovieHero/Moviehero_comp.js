import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { FcLike } from "react-icons/fc";

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="fkg"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="fkg"
        />
      </div>

      <div className="relative hidden lg:block" style={{ height: "80vh" }}>
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        ></div>

        <div className="absolute z-30 w-88 h-96 left-20 top-10 flex gap-3">
          <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="h-full w-64 rounded-xl"
          />
          <div className="flex flex-col h-full w-66 ">
            <div>
              <h1 className="text-white text-3xl font-bold ">
                Shangg-Chi and the Lengend of the Ten Rings
              </h1>
            </div>
            <div className="flex flex-row gap-3 text-white w-full my-5">
              <span className="text-white flex items-center gap-3">
                <FcLike /> <h3 className="font-bold">91%</h3>
                <h4> 29.6K ratings </h4>
                <BiChevronRight />
              </span>
            </div>
            <div className="flex flex-row gap-4 bg-zinc-800 w-3/4 rounded p-3 items-center justify-between">
               
                <div className="text-white ">
                    <h5 className="font-bold">Add your rating and review</h5>
                    <h6>Your ratings matter</h6>

                </div>
                <button className="bg-white text-black text-sm rounded px-2 py-1">
                    <span>Rate Now</span>

                </button>
         
            </div>
            <div className="flex flex-col text-black p-2 my-7 text-sm">
                <span className="bg-white p-2 my-2 basic-1/4">2D, 3D, IMAX 2D, MX4D</span>
                <span className="bg-white p-2">2D, 3D, IMAX 2D, MX4D</span>
            </div>

          </div>
        </div>

        <img
          src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
          alt="poster"
          className="w-full h-full"
        />
      </div>
    </>
  );
};

export default MovieHero;
