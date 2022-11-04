import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Personal from "../pages/Personal/Personal";
import Register from "../pages/Register/Register";
import RequireAuth from "../components/RequireAuth/RequireAuth";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/*Public routes */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/main" element={<Main />} />

				{/*Private routes */}
				<Route element={<RequireAuth />}>
					<Route path="/personal" element={<Personal />} />
				</Route>

				{/*Catch all */}
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default Router;
