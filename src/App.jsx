import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/common/Navbar.jsx'
import Home from './assets/pages/Home.jsx'
import Footer from './assets/components/common/Footer.jsx'
import ContactUs from './assets/pages/ContactUs.jsx'



import WeldNeck from './assets/pages/products/flanges/WeldNeck.jsx'
import SlipOn from './assets/pages/products/flanges/SlipOn.jsx'
import SocketWeld from './assets/pages/products/flanges/SocketWeld.jsx'
import Threaded from './assets/pages/products/flanges/Threaded.jsx'
import Blind from './assets/pages/products/flanges/Blind.jsx'

import StainlessSteel from './assets/pages/products/pipes/StainlessSteel.jsx'



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />



        <Route path='/products/flanges/weld-neck-flange' element={<WeldNeck />} />
        <Route path='/products/flanges/slip-on-flange' element={<SlipOn />} />
        <Route path='/products/flanges/socket-weld-flange' element={<SocketWeld />} />
        <Route path='/products/flanges/threaded-flange' element={<Threaded />} />
        <Route path='/products/flanges/blind-flange' element={<Blind />} />
        <Route path='/products/pipes-tubes/stainless-steel-pipes' element={<StainlessSteel />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App