import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const RequireAuth = () => {
	const { auth } = useAuth();
	const { user } = useUser();
	const location = useLocation();
	return auth?.id || user?.id ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
