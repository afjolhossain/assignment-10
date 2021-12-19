import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Medicines from "./pages/Medicine/Medicine/Medicines/Medicines";
import Owners from "./pages/Owner/Owners/Owners";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="medicine" element={<Medicines />} />
        <Route path="owner" element={<Owners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
