import React from "react";
import Laptop from "../assests/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            {" "}
            Manage Data Analytics
          </h1>
          <p className="">
            The best that ever is, im putting words here because i dont know
            what to put, noee weoife eiohfoie foiehjfiek jnefjiorgjr fjoiejg
            eiogjegio eigejgion ekofjnegioeko eiofjheiogn oie
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
