import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F5F7FB]">
      <Header />
      <div className="flex flex-row grow bg-[url('/public/LandingPage.svg')] bg-contain bg-no-repeat bg-right">
        <div className="my-20 mx-5 md:m-20 lg:w-1/2">
          <h2 className="text-[#69A1AC] leading-relaxed font-mono font-bold text-xl md:text-3xl lg:text-5xl">
            Achieve your goals, one step at a time.
          </h2>
          <p className="pt-10 text-[#35374E] leading-normal text-lg sm:text-3xl">
            Sign up now and start tracking your goals with <b>ProgressPaver</b>.
          </p>
          <button className="bg-[#69A1AC] my-10 text-white text-lg md:text-2xl p-2 md:px-8 md:py-3 rounded-md">
            Sign Up
          </button>
        </div>
        {/* <img src={landingBg} alt="landing" /> */}
      </div>
    </div>
  );
};

export default Landing;
