import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route 설정*/}
        <Route path="/" element={<Home />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
