import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { addUser, removeUser } from "./utils/userSlice";
import Sign from "./components/authenication/Sign";
import Browse from "./components/browse/Browse";
import LandingPage from "./components/landing page/LandingPage";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [],
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/sign",
      element: <Sign />,
    },
  ]);
  const dispatcher = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { displayName, email, uid } = user;
      dispatcher(addUser({ displayName, email, uid }));
      // console.log("logged In");
    } else {
      dispatcher(removeUser());
      // console.log("logged Out");
    }
  });
  return (
    <>
      {" "}
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
