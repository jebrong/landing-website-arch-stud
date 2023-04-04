import "./css/main.min.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes></AnimatedRoutes>
    </BrowserRouter>
  );
}
export default App;
