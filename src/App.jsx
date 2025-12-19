import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/common/Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import Footer from './assets/components/common/Footer.jsx'



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App