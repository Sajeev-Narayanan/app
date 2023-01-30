import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { userData } from "./userGoogleAuthSlice";
import { userData2 } from "./userAuthSlice";


const UserRequireAuth = () => {
  // const user = useSelector(userData)
  const user2 = useSelector(userData2)
  // console.log(user);
  const location = useLocation();

  return user2 != "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default UserRequireAuth;