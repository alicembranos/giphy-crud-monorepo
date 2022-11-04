import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router/Router";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Router />
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
