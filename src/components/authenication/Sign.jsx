import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRef, useState, useEffect } from "react";
import Header from "../header/Header";
import Button from "../../utils/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import { isEmailValid, isPasswordValid } from "../../utils/validation";
import { addUser } from "../../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../utils/Firebase";

const SignIn = ({}) => {
  const [showPassword, setShowPassword] = useState("password");
  const navigate = useNavigate();
  //checking signIn/signOut
  const [isSignIn, setIsSignIn] = useState(true);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  // makeing the password hidden/visible on click
  const [showPasswordBtn, setShowPasswordBtn] = useState(false);
  const handleShowPassword = () => {
    showPassword == "password"
      ? setShowPassword("text")
      : setShowPassword("password");
  };

  //making the show button disappear whenever we click outside  the input password field //
  const passwordRef = useRef(null);

  const handleShowPasswordBtn = (event) => {
    if (!passwordRef.current.contains(event.target)) setShowPasswordBtn(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleShowPasswordBtn);

    return () => {
      document.removeEventListener("click", handleShowPasswordBtn);
    };
  });

  //validation email and password to make sure they're written in correct order
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();
  const [emailError, setEmailError] = useState();
  const [passError, setPassError] = useState();

  const dispatcher = useDispatch();
  const handleSubmit = () => {
    setEmailError(isEmailValid(emailRef.current.value));
    setPassError(isPasswordValid(passRef.current.value));
    // console.log(emailError, passError);
    if (emailError || passError) return;
    // console.log("hehe");
    if (!isSignIn) {
      // signUp
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          // user.displayName = nameRef.current.value;

          await updateProfile(userCredential.user, {
            displayName: nameRef.current.value,
          }).then(() => {
            const { displayName, email, uid } = auth.currentUser;
            dispatcher(addUser({ displayName, email, uid }));
          });
          addUser(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setPassError(errorMessage);
        });
    } else {
      // signUp
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          addUser(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setPassError(errorMessage);
        });
    }
  };

  return (
    <>
      <div
        className=" w-full bg-center  
         bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg)] "
      >
        <div className="h-full w-full landingBlack relative flex items-center justify-center">
          <Header signIn={false} />

          <div className="bg-[rgba(0,0,0,0.6)]  min-h-[35rem] my-[10rem] px-[4rem] py-[5rem] text-white w-[30rem]">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex flex-col gap-5"
            >
              <h1 className="text-white text-3xl font-[600]">
                {isSignIn ? "Sign In" : "Sign Up"}
              </h1>

              {!isSignIn && (
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="outline-none px-5 bg-secondaryTwo text-white text-md h-[3rem] rounded-lg focus:bg-[rgb(69,69,69)] duration-200"
                />
              )}
              <input
                ref={emailRef}
                type="text"
                placeholder="Email Address"
                className="outline-none px-5 bg-secondaryTwo text-white text-md h-[3rem] rounded-lg focus:bg-[rgb(69,69,69)] duration-200"
              />
              {emailError && (
                <h1 className="text-[.7rem] text-primary">{emailError}</h1>
              )}

              <div className="relative w-full" ref={passwordRef}>
                <input
                  ref={passRef}
                  type={`${showPassword}`}
                  placeholder="Password"
                  className="outline-none px-5 bg-secondaryTwo text-white text-md w-full h-[3rem] rounded-lg focus:bg-[rgb(69,69,69)] duration-200"
                  onFocus={() => {
                    setShowPasswordBtn(true);
                  }}
                />
                {showPasswordBtn && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleShowPassword(e);
                      changeText(e);
                    }}
                    className="text-slate-400 absolute right-1 h-full"
                  >
                    Show
                  </button>
                )}
              </div>
              {passError && (
                <h1 className="text-[.7rem] text-primary">{passError}</h1>
              )}
              <button type="submit w-full">
                <Button
                  text={isSignIn ? "Sign In" : "Sign Up"}
                  style={"w-full py-3"}
                />
              </button>
              <div className="text-[.8rem] flex w-full justify-between text-slate-500">
                <div className="flex itemx-center gap-1">
                  <input type="checkbox" name="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <div>
                  <Link>Need Help?</Link>
                </div>
              </div>
              <div>
                <h3 className="text-slate-500">
                  {isSignIn ? (
                    <>
                      {" "}
                      New to netflix?{" "}
                      <span
                        className="text-white cursor-pointer"
                        onClick={handleIsSignIn}
                      >
                        Sign Up now
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <span
                        className="text-white cursor-pointer"
                        onClick={handleIsSignIn}
                      >
                        Sign In now
                      </span>
                    </>
                  )}
                </h3>
              </div>
              <div>
                <p className="text-slate-500 text-sm">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot
                  <span className="text-blue-500">
                    <Link> Learn More</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
