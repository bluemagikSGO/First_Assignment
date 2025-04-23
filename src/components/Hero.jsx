import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./GButton";
import SocialButton from "./SocialButton";
import LanguageSelector from "./language";
import Switch from "./Toggle";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen pt-[40px]">
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

        <button className="flex items-center gap-1 mx-auto border-2 border-black rounded-[50px] px-[35px] py-[17px] font-[700] bg - bg-yellow-300 hover:bg-blue-400 hover:text-white hover:duration-300 ease-in-out">
          <span>Start 30-day FREE trial</span>
          <span>
            <FaArrowRightLong />
          </span>
        </button>
        <small className="font-[500] ">
          Try us free | No credit card required | Cancel anytime
        </small>
        <hr />
      </div>
      {/* <div className="flex justify-between items-center">
        <div className="flex flex-col fle items-left mx-5 gap-2">
          <div className="font-[700]">Get the GetResponse App</div>
          <div>
            <Button />
          </div>
        </div>
        <div className="flex flex-col fle items-left mx-5 gap-2">
          <div className="font-[700]">Follow us</div>
          <div className="flex">
            <SocialButton />
          </div>
        </div>
        <div className="flex flex-col fle items-left mx-5 gap-2">
          <div className="font-[700]">Change the language</div>
          <div>
            <LanguageSelector />
          </div>
        </div>
        <div className="flex flex-col fle items-left mx-5 gap-2">
          <div className="font-[700]">Turn on high contrast</div>
          <div>
            <Switch />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
