// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import GuestLayout from './layouts/GuestLayouts.jsx';
import AdminLayout from './layouts/AdminLayouts.jsx';

// Guest Pages
import Home from './pages/guest/home';
import About from './pages/guest/about';
import Contact from './pages/guest/contact';
import FAQ from './pages/guest/faq';

// Admin Pages
import FAQManager from './pages/admin/faqManager.jsx';

// Auth Pages
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/forgotPassword';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Guest Pages with layout */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        {/* Admin Pages with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="faq" element={<FAQManager />} />
        </Route>

        {/* Auth Pages (tanpa layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </Router>
  );
}

export default App;
