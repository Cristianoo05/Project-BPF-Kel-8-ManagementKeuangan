import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import GuestLayout from '../src/layouts/GuestLayouts.jsx'
import Home from './pages/guest/home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>



        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
        </Route>



      </Routes>
    </Router>
  )
}

export default App
