import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home/Home/Home";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
