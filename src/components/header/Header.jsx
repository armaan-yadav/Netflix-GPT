import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/NetFlix-Logo.png";
import Button from "../../utils/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../utils/Firebase";
import { useSelector } from "react-redux";
const Header = ({ signIn, children }) => {
  const isSignedIn = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const user = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] max-sm:h-[90px] flex justify-between px-[10rem] max-sm:px-[1rem]  items-center absolute top-0">
      <img
        src={Logo}
        alt="logo"
        className="h-full scale-[2] max-sm:scale-[1.5]"
      />
      <div className="flex items-center gap-5 justify-center ">
        <div>{children}</div>
        {!isSignedIn && signIn && (
          <Link to={"/sign"}>
            <Button text={"Sign In"} style={"h-fit max-sm:text-xl"} />
          </Link>
        )}
        {isSignedIn && (
          <>
            <div className="group relative flex items-center gap-2">
              <img
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                alt="usericon"
                className="h-[30px] rounded-md cursor-pointer"
              />
              <h1 className="text-white">Hey, {user?.displayName}</h1>
              <div className="absolute top-[100%] w-full left-0 h-[20rem] bg-pink-300  group-hover:bg-pink-900 invisible group-hover:visible">
                <button onClick={handleSignOut}>
                  <Button text={"Sign Out"} style={"h-fit max-sm:text-xl"} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
