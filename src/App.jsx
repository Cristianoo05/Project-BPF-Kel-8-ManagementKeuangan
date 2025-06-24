import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import GuestLayout from './layouts/GuestLayouts.jsx';
import Home from './pages/guest/home';
import About from './pages/guest/about';
import Contact from './pages/guest/contact';

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
