import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, isAdmin }) => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    if (isAuthenticated === false) {
      return Navigate("/login");
    } else if (isAdmin === true && user.role !== "admin") {
      navigate("/login");
      return;
    } else {
      return children;
    }
  }
};

export default ProtectedRoute;
