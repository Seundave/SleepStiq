import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Layout from "../layout";
import About from "../pages/About/index";
import Shop from "../pages/Shop";
import Faqs from "../pages/Faqs/index";
import Post from "../pages/Post/Post";
import PostDescription from "../pages/Post/PostDescription";

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
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:id" element={<PostDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
