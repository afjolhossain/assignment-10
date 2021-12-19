import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
