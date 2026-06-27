import React from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import CaseStudyPage from './pages/CaseStudyPage.jsx';
import NationalRadioCampaignPage from './pages/NationalRadioCampaignPage.jsx';
import LuxuryPrintRevivalPage from './pages/LuxuryPrintRevivalPage.jsx';
import UrbanGuerrillaLaunchPage from './pages/UrbanGuerrillaLaunchPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import BookingModal from './components/BookingModal.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

function App() {
    return (
        <Router>
            <ScrollProgress />
            <CustomCursor />
            <ScrollToTop />
            <BookingModal />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/galeria" element={<GalleryPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/noticias" element={<NewsPage />} />
                <Route path="/case-study/national-radio-campaign" element={<NationalRadioCampaignPage />} />
                <Route path="/case-study/luxury-print-revival" element={<LuxuryPrintRevivalPage />} />
                <Route path="/case-study/urban-guerrilla-launch" element={<UrbanGuerrillaLaunchPage />} />
                <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            </Routes>
        </Router>
    );
}

export default App;