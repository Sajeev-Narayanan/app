import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentToken } from "./authSlice";

const AdminRequireAuth = () => {
  const admin = useSelector(currentToken)
  // console.log(user);
  const location = useLocation();

  return admin ? (
    <Outlet />
  ) : (
    <Navigate to="/adminLogin" state={{ from: location }} replace />
  );
};
export default AdminRequireAuth;