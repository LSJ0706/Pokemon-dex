import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route*/}
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
