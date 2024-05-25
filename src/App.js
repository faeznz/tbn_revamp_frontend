import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth_context';
import ProtectedRoute from './components/protected_route';

import LoginPage from './page/login_page/login_page';
import RegisterPage from './page/register_page/register_page';

import Homepage from './page/home_page';
import BlogListPage from './page/blog/blog_list_page';
import BlogDetailPage from './page/blog/blog_detail_page';
import ContactUsPage from './page/contact/contact_us_page';

import VisiMisiPage from './page/about/visi_misi_page';
import HistoryPage from './page/about/history_page';
import HowItWorksPage from './page/about/how_it_works_page';
import OurApproachPage from './page/about/our_approach_page';
import WherePage from './page/about/where_page';
import PartnershipPage from './page/about/partnership_page';
import WhoWeArePage from './page/about/who_we_are_page';

import PendaftaranEventPage from './page/event/pendaftaran_event_page';
import UpcomingEventPage from './page/event/upcoming_event_page';
import PengalamanPesertaPage from './page/event/pengalaman_peserta_page';
import HistoryEventPage from './page/event/history_event_page';
import HistoryEventDetailPage from './page/event/history_event_detail_page';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Route */}
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUsPage />} />

          {/* Route About */}
          <Route path="/about/visimisi" element={<VisiMisiPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about/our-approach" element={<OurApproachPage />} />
          <Route path="/about/where" element={<WherePage />} />
          <Route path="/about/partnership" element={<PartnershipPage />} />
          <Route path="/about/who-we-are" element={<WhoWeArePage />} />

          {/* Route Blog */}
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          {/* Route Event */}
          <Route path="event/register-event" element={<ProtectedRoute element={<PendaftaranEventPage />} />} />
          <Route path="/event/upcoming" element={<ProtectedRoute element={<UpcomingEventPage />} />} />
          <Route path="event/pengalaman-peserta" element={<ProtectedRoute element={<PengalamanPesertaPage />} />} />
          <Route path="event/history" element={<ProtectedRoute element={<HistoryEventPage />} />} />
          <Route path="event/history/detail" element={<ProtectedRoute element={<HistoryEventDetailPage />} />} />

          {/* Route Login and Register */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
