import React from "react";
import Button from "../../utils/buttons/Button";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const isSignedIn = useSelector((state) => state.user);
  return (
    <>
      <div
        className="h-[100vh] w-full bg-center  
         bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg)] "
      >
        <div className="h-full w-full landingBlack relative flex items-center justify-center ">
          <Header signIn={true}>
            <div className="language max-sm:hidden ">
              <select className="language-selector px-4 py-1 bg-transparent text-white border border-[rgba(255,255,255,0.3)]">
                <option value="defualt" className="px-2  ">
                  {" "}
                  {/* <i className="fa-solid fa-language text-3xl"></i> */}
                  English
                </option>
                <option value="hin" className="px-2">
                  Hindi
                </option>
              </select>
            </div>
          </Header>

          <div className="content text-white text-center flex flex-col  justify-center  items-center w-full px-2">
            <h1 className="text-5xl font-[950] max-sm:text-4xl">
              Unlimited movies,TV shows and more
            </h1>
            <h3 className="text-3xl font-[400] mt-4 max-sm:text-2xl">
              Watch anywhere. cancel anytime{" "}
            </h3>
            <h4 className="text-xl mt-7 max-sm:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="flex  w-fit mt-10 gap-5 max-sm:flex-col items-center">
              {isSignedIn ? (
                <>
                  <Link to={"/browse"}>
                    <Button text={"Continue Watching"} style={""} />
                  </Link>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="bg-[rgba(0,0,0,0.4)] border border-2-white] rounded-md text-xl outline-none px-5 py-3 min-w-[25rem]"
                    placeholder="Email Address"
                  />
                  <Button
                    text={`Get Started 〉`}
                    style={
                      "text-2xl flex items-center justify-center  max-sm:py-2"
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
