import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./router/Router";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<SearchContextProvider>
					<Router />
				</SearchContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
