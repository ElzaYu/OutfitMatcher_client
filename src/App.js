import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./pages/Home/Home";
import Wardrobe from "./pages/Wardrobe/Wardrobe";
import NewTopPage from "./pages/NewWardrobe/NewTopPage";
import NewBottomPage from "./pages/NewWardrobe/NewBottomPage";
import NewAccessoryPage from "./pages/NewWardrobe/NewAccessoryPage";
import NewShoesPage from "./pages/NewWardrobe/NewShoesPage";
import Matcher from "./pages/Matcher/Matcher2";
import FavoriteLook from "./pages/FavouriteLook/FavouriteLook";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matcher" element={<Matcher />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/wardrobe/newtop" element={<NewTopPage />} />
          <Route path="/wardrobe/newbottom" element={<NewBottomPage />} />
          <Route path="/wardrobe/newaccessory" element={<NewAccessoryPage />} />
          <Route path="/wardrobe/newshoes" element={<NewShoesPage />} />
          <Route path="/favoritelook" element={<FavoriteLook />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
