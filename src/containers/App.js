import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landing/Landing";
import Home from "../components/Home/Home";
import About from "../components/About/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
