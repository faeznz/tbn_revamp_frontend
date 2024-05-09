import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './page/home_page';
import LoginPage from './page/login_page/login_page';
import RegisterPage from './page/register_page/register_page';
import VisiMisiPage from './page/about/visi_misi_page';
import HistoryPage from './page/about/history_page';
import HowItWorksPage from './page/about/how_it_works_page';
import OurApproachPage from './page/about/our_approach_page';
import WherePage from './page/about/where_page';
import PartnershipPage from './page/about/partnership_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Homepage />}/>
        
        {/* Route About */}
        <Route path="/about/visimisi" element={<VisiMisiPage />}/>
        <Route path="/about/history" element={<HistoryPage />}/>
        <Route path="/about/how-it-works" element={<HowItWorksPage />}/>
        <Route path="/about/our-approach" element={<OurApproachPage />}/>
        <Route path="/about/where" element={<WherePage />}/>
        <Route path="/about/partnership" element={<PartnershipPage />}/>

        {/* Route Login and Register */}
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
