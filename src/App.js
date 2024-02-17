import "./App.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./pages/Home/Home";
import Wardrobe from "./pages/Wardrobe/Wardrobe";
import Matcher from "./pages/Matcher/Matcher";
import FavoriteLook from "./pages/FavouriteLook/FavouriteLook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matcher" element={<Matcher />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/favoritelook" element={<FavoriteLook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
