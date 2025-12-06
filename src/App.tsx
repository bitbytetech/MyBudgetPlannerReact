import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRouts";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
