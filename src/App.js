import './App.css';
import { Signup } from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Signin} from "./components/Signin";
import {Home} from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
