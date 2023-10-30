import './App.css';
import Navbar from './Comps/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Comps/Signup/signup';
import Login from './Comps/Login/login';
import NoFile from './Comps/404/404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />

      {/* Routes */}
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="*" element={<NoFile/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
