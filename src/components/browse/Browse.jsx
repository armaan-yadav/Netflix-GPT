import React from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Browse = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // return user ? (
  //   <div className="w-full min-h-[100vh] bg-secondary text-white">
  //     <Header signIn={true} />
  //   </div>
  // ) : (
  //   <>{navigate("/")} </>
  // );
  return (
    <div className="w-full min-h-[100vh] bg-secondary text-white">
      <Header signIn={true} />
    </div>
  );
};

export default Browse;
