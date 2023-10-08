import './App.css';
import Navbar from './Comps/Navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Comps/Signup/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />

      {/* Routes */}
        <Routes>
          <Route path="/Signup" element={<Signup/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
