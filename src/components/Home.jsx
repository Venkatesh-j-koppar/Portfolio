import React from "react";
import Hero from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row text-white">
        <div className="flex flex-col justify-center items-start px-4 m-8">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'am Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am having 2.5 years of Experience
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r mx-auto w-2/3 md:w-full from-cyan-500 to-blue-500 text-xl"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Hero} alt="MyProfile " className="rounded-2xl h-52 w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
