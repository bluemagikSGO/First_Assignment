import { FaArrowRightLong } from "react-icons/fa6";

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
      </div>

      {/* card */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-40 pt-5">
        {" "}
        {/* Adds spacing between cards */}
        {/* Card 1 */}
        <div className="pt-[30px] px-[36px] pb-[36px] bg-white rounded-lg shadow-md border border-gray-200 h-full hover:border-4 hover:border-blue-500 transition-all">
          <span className="block font-bold text-[28px] text-blue-400">
            10% list growth
          </span>
          <span className="block text-black-600 text-[27px] font-bold">
            & sales spike in tough niche
          </span>
          It's nice that with GetResponse, we have the tools and integrations we
          need within our budget.
          <span className="block mt-10">
            <button className="flex items-center gap-1 mx-auto border-2 border-black rounded-lg px-[35px] py-[8px] font-[700] text-white bg-blue-400 hover:bg-yellow-300 hover:text-black hover:duration-300 ease-in-out">
              <span>Read case study</span>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </span>
        </div>
        {/* Card 2 */}
        <div className="pt-[30px] px-[36px] pb-[36px] bg-white rounded-lg shadow-md border border-gray-200 h-full hover:border-4 hover:border-blue-500 transition-all">
          <span className="block font-bold text-[28px] text-blue-400">
            75% of all public sales
          </span>
          <span className="block text-black-600 text-[27px] font-bold">
            from email autoresponders
          </span>
          <p className=" text-gray-700">
            Together with GetResponse, we've been able to convince customers of
            need, culminating in compelling sales.
            <span className="block mt-5">
              <button className="flex items-center gap-1 mx-auto border-2 border-black rounded-lg px-[35px] py-[8px] font-[700] text-white bg-blue-400 hover:bg-yellow-300 hover:text-black hover:duration-300 ease-in-out">
                <span>Read case study</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </span>
          </p>
        </div>
        {/* Card 3 */}
        <div className="pt-[30px] px-[36px] pb-[36px] bg-white rounded-lg shadow-md border border-gray-200 h-full hover:border-4 hover:border-blue-500 transition-all">
          <span className="block font-bold text-[28px] text-blue-400">
            Up to $1,000
          </span>
          <span className="block text-black-600 text-[27px] font-bold">
            for every 1000 emails sent
          </span>
          <p className=" text-gray-700">
            Regarding revenue contribution, the email marketing channel is like
            free money to us.
            <span className="block mt-11">
              <button className="flex items-center gap-1 mx-auto border-2 border-black rounded-lg px-[35px] py-[8px] font-[700] text-white bg-blue-400 hover:bg-yellow-300 hover:text-black hover:duration-300 ease-in-out">
                <span>Read case study</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
