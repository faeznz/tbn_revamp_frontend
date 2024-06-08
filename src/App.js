import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth_context';
import ProtectedRoute from './components/protected_route';
import ScrollToTop from './components/ScrollToTop';

import LoginPage from './page/login_page/login_page';
import RegisterPage from './page/register_page/register_page';

import Homepage from './page/homepage/home_page';
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
import UpcomingEventPageDetail from './page/event/upcoming_event_detail';
import PengalamanPesertaPage from './page/event/pengalaman_peserta_page';
import PengalamanPesertaCreate from './page/event/pengalaman_peserta_create';
import PengalamanPesertaDetailPage from './page/event/pengalaman_peserta_detail';
import HistoryEventPage from './page/event/history_event_page';
import HistoryEventDetailPage from './page/event/history_event_detail_page';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="event/register-event/:eventId" element={<ProtectedRoute element={<PendaftaranEventPage />} />} />
          <Route path="/event/upcoming" element={<ProtectedRoute element={<UpcomingEventPage />} />} />
          <Route path="/event/upcoming/detail/:id" element={<ProtectedRoute element={<UpcomingEventPageDetail />} />} />
          <Route path="event/pengalaman-peserta" element={<ProtectedRoute element={<PengalamanPesertaPage />} />} />
          <Route path="/event/pengalaman-peserta/create/:id" element={<ProtectedRoute element={<PengalamanPesertaCreate />} />} />
          <Route path="/event/pengalaman-peserta/detail/:id" element={<ProtectedRoute element={<PengalamanPesertaDetailPage />} />} />
          <Route path="event/history" element={<ProtectedRoute element={<HistoryEventPage />} />} />
          <Route path="event/history/detail/:registrationId" element={<ProtectedRoute element={<HistoryEventDetailPage />} />} />

          {/* Route Login and Register */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
