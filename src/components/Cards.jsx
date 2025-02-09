import React from "react";
import Single from "../assests/single.png";
import Double from "../assests/double.png"
import Triple from "../assests/triple.png"

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB of Storage</p>
            <p className="py-2 border-b mx-8 mt-8 "> 1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="Double"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB of Storage</p>
            <p className="py-2 border-b mx-8 mt-8 "> 1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium md:my-0 my-8 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="single"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 ">500 GB of Storage</p>
            <p className="py-2 border-b mx-8 mt-8 "> 1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8 ">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
