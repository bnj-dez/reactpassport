import { Route, Routes } from "react-router-dom";
import './index.css';
import Login from "./pages/Login";
import Profil from "./pages/Profil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;