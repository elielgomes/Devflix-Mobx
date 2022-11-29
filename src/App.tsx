import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Top from "./pages/Top";
import Upcoming from "./pages/Upcoming";
import Details from "./pages/Details";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/popular" element={<Popular />} />
			<Route path="/upcoming" element={<Upcoming />} />
			<Route path="/top" element={<Top />} />
			<Route path="/details/:id" element={<Details />} />
			<Route path="/search" element={<Search />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);


export default App;
