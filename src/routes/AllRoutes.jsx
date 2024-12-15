import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Thankyou from "../pages/Thankyou";
import NotFound from "../pages/NotFound";
import Home2 from "../pages/Home2";
import Home3 from "../pages/Home3";

let AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lp2" element={<Home2 />} />
      <Route path="/lp3" element={<Home3 />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
