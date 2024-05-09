import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './page/home_page';
import LoginPage from './page/login_page/login_page';
import RegisterPage from './page/register_page/register_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
