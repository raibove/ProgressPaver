import logo from "../asset/logoColor.svg";
import share from "../asset/share.svg";
import logout from "../asset/logout.svg";
import { useState } from "react";
import axios from "axios";

const DashboardHeader = () => {
  const [url, setUrl] = useState("https://ProgressPaver.raibove.repl.co");

  const shareTweet = async () => {
    try {
      let response = await axios.post(
        "https://api.apyhub.com/generate/qr-code/url",
        {
          content: "https://ProgressPaver.raibove.repl.co",
        },
        {
          headers: {
            "apy-token": process.env.REACT_APP_AUTH_TOKEN,
          },
        }
      );
      console.log(response);
      setUrl(response.data.data);
      window.location.assign(
        `https://twitter.com/share?text=Check%20out%20this%20awesome%20product!&url=${url}`
      );
    } catch (err) {
      console.log(err);
      window.location.assign(
        `https://twitter.com/share?text=Check%20out%20this%20awesome%20product!&url=${url}`
      );
    }
  };

  return (
    <header className="flex px-5 h-20 items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="text-red" />
        <h2 className="text-[#69A1AC] text-xl md:text-3xl font-mono pt-3">
          ProgressPaver
        </h2>
      </div>
      <div className="bg-white py-3 px-10 h-14 rounded-3xl drop-shadow-lg flex justify-center gap-x-4">
        <div
          className="bg-[#CCF7FF] p-4 rounded-full flex justify-center items-center cursor-pointer"
          onClick={shareTweet}
        >
          <img src={share} alt="share" className="h-6 w-6" />
        </div>
        <div className="bg-[#CCF7FF] p-4 rounded-full flex justify-center items-center cursor-pointer">
          <img src={logout} alt="share" className="h-6 w-6" />
        </div>
      </div>
      <button className="text-[#EEF9FB] bg-[#03748B] font-bold px-5 py-2 rounded-md">
        + &nbsp; New Goal
      </button>
    </header>
  );
};
export default DashboardHeader;
