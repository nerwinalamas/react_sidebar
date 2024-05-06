import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Sidebar from "./components/Sidebar";

const App = () => {
	return (
		<>
			<div className="w-screen h-screen font-poppins">
				<Router>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/sales" element={<Sales />} />
					</Routes>
				</Router>
			</div>
		</>
	);
};

export default App;
