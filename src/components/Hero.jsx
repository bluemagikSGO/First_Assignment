import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  const [isSubscribed, setisSubscribed] = useState(false);
  const subscribed = () => {
    setisSubscribed(!isSubscribed);
  };
  return (
    <section className="flex flex-col  pt-[40px]">
      <div className="text-center space-y-7 ">
        <p className="text-[#717171] font-[700]">
          ALL-IN-ONE MARKETING SOFTWARE
        </p>

        <h1 className="font-[700] lg:text-7xl text-3xl ">
          Send emails, automate marketing,
          <br />
          monetize content – in one place
        </h1>

        <p className="font-[500] text-lg text-green-500 lg:text-black px-3">
          Grow your business and boost revenue with an easy, affordable platform
          that brings email,
          <br />
          automation, online courses and paid newsletters together.
        </p>

        <button
          onClick={subscribed}
          className="flex items-center gap-1 mx-auto border-2 border-black rounded-[50px] px-[35px] py-[17px] font-[700] bg - bg-yellow-300 hover:bg-blue-400 hover:text-white hover:duration-300 ease-in-out"
        >
          <span>
            {isSubscribed ? "You are SUBSCRIBED" : "Start 30-day FREE trial"}
          </span>
          <span>
            <FaArrowRightLong />
          </span>
        </button>

        <small className="font-[500] ">
          Try us {isSubscribed ? "on premium" : "free"} | No credit card
          required | Cancel anytime
        </small>
      </div>
      {/* card */}
    </section>
  );
};

export default Hero;
