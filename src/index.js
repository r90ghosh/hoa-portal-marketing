import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Demo from './pages/Demo'; // make sure Demo.js exists
import reportWebVitals from './reportWebVitals';
import ContactUs from './pages/ContactUs';
import BlogsPage from './pages/BlogsPage';
import BlogPost from './pages/BlogPost';
import Layout from './Layout';
import WhyHOAPortal from './pages/WhyHOAPortal';
import AboutUs from './pages/AboutUs';
import CommunityPortal from './pages/CommunityPortal';
import Privacy from './pages/Privacy';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="blogs/:slug" element={<BlogPost />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="demo" element={<Demo />} />
        <Route path="why-hoa-portal" element={<WhyHOAPortal />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/community-portal" element={<CommunityPortal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} /> 
      </Route>
    </Routes>
    </Router>

    
  </React.StrictMode>
);

reportWebVitals();
