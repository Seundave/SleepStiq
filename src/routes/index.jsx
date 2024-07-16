import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Layout from "../layout";
import About from "../pages/About/index";
import Shop from "../pages/Shop";
import Faqs from "../pages/Faqs/index";
import NoPageLayout from "../layout/NoPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
          <Route path="*" element={<NoPageLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
