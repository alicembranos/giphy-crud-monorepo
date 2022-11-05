import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useUser";

const RequireAuth = () => {
	const { auth } = useAuth();
	const location = useLocation();
	return auth?.id ? <Outlet /> : <Navigate to="/main" state={{ from: location }} replace />;
};

export default RequireAuth;
