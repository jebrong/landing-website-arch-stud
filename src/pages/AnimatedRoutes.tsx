import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

// Public Routes
import Home from "./Home/Home";
import About from "./About/About";
import Error from "./Error/Error";
import Demo from "./Demo/Demo";
import NavPage from "../components/NavPage";

function AnimatedRoutes(props: any) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<NavPage></NavPage>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="demo" element={<Demo></Demo>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
