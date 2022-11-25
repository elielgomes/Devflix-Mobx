import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Teste from "./pages/Teste";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
