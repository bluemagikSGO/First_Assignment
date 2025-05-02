import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Cardcard = ({ btnT, span1, span2, para }) => {
  return (
    <section className="">
      <div className="pt-6 px-4 pb-6 bg-white rounded-lg shadow-md border border-gray-200 h-full hover:border-4 hover:border-blue-500 transition-all mt-2">
        <img
          src="https://us-wd.gr-cdn.com/customers/sites/16/2024/0…shingGroup1-removebg-preview-1-e1721125158123.png"
          alt=""
        />
        <span className="block font-bold text-2xl sm:text-[28px] text-blue-400">
          {span1}
        </span>
        <span className="block text-black-600 text-xl sm:text-[27px] font-bold">
          {span2}
        </span>
        <p className="text-gray-700">{para}</p>
        <span className="block mt-6 sm:mt-10">
          <button className="flex items-center gap-1 mx-auto border-2 border-black rounded-lg px-4 sm:px-[35px] py-2 font-bold text-white bg-blue-400 hover:bg-yellow-300 hover:text-black transition ease-in-out duration-300">
            <span>{btnT}</span>
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </span>
      </div>
    </section>
  );
};

export default Cardcard;
