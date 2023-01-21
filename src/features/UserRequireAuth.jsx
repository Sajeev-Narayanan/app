import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { userData } from "./userGoogleAuthSlice";


const UserRequireAuth = () => {
    const user = useSelector(userData)
    // console.log(user);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default UserRequireAuth;