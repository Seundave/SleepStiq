import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Hero";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
