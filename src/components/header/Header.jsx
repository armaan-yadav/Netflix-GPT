import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/NetFlix-Logo.png";
import Button from "../../utils/buttons/Button";
import { Link } from "react-router-dom";

const Header = ({ signIn }) => {
  const [showSignIn, setShowSignIn] = useState(true);
  useEffect(() => {
    setShowSignIn(signIn);
  }, [signIn]);
  return (
    <div className="w-full h-[80px] max-sm:h-[90px] flex justify-between px-[10rem] max-sm:px-[1rem]  items-center absolute top-0">
      <img
        src={Logo}
        alt="logo"
        className="h-full scale-[2] max-sm:scale-[1.5]"
      />
      {showSignIn && (
        <div className="flex items-center gap-5">
          <div className="language max-sm:hidden">
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
          <Link to={"/sign"}>
            <Button text={"Sign In"} style={"h-fit max-sm:text-xl"} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
