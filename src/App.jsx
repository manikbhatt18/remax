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
import AboutUs from './assets/pages/AboutUs.jsx'
import CarbonSteel from './assets/pages/products/pipes/CarbonSteel.jsx'
import Hastelloy from './assets/pages/products/pipes/Hastelloy.jsx'
import Incoloy from './assets/pages/products/pipes/Incoloy.jsx'
import Monel from './assets/pages/products/pipes/Monel.jsx'
import Titanium from './assets/pages/products/pipes/Titanium.jsx'
import Tantalum from './assets/pages/products/pipes/Tantalum.jsx'
import Aluminium from './assets/pages/products/pipes/Aluminium.jsx'
import Duplex from './assets/pages/products/pipes/Duplex.jsx'
import Nickel from './assets/pages/products/pipes/Nickel.jsx'
import AlloySteel from './assets/pages/products/pipes/AlloySteel.jsx'
import MildSteel from './assets/pages/products/pipes/MildSteel.jsx'
import Copper from './assets/pages/products/pipes/Copper.jsx'
import Brass from './assets/pages/products/pipes/Brass.jsx'



function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />



        <Route path='/products/flanges/weld-neck-flange' element={<WeldNeck />} />
        <Route path='/products/flanges/slip-on-flange' element={<SlipOn />} />
        <Route path='/products/flanges/socket-weld-flange' element={<SocketWeld />} />
        <Route path='/products/flanges/threaded-flange' element={<Threaded />} />
        <Route path='/products/flanges/blind-flange' element={<Blind />} />


        
        <Route path='/products/pipes-tubes/stainless-steel-pipes' element={<StainlessSteel />} />
        <Route path='/products/pipes-tubes/carbon-steel-pipes' element={<CarbonSteel />} />
        <Route path='/products/pipes-tubes/hastelloy-pipes' element={<Hastelloy />} />
        <Route path='/products/pipes-tubes/incoloy-pipe' element={<Incoloy />} />
        <Route path='/products/pipes-tubes/monel-pipe' element={<Monel />} />
        <Route path='/products/pipes-tubes/titanium-pipe' element={<Titanium />} />
        <Route path='/products/pipes-tubes/tantalum-pipe' element={<Tantalum />} />
        <Route path='/products/pipes-tubes/aluminium-pipe' element={<Aluminium />} />
        <Route path='/products/pipes-tubes/duplex-steel-superduplex-steel-pipe' element={<Duplex />} />
        <Route path='/products/pipes-tubes/nickel-pipe' element={<Nickel />} />
        <Route path='/products/pipes-tubes/alloy-steel-pipes' element={<AlloySteel/>} />
        <Route path='/products/pipes-tubes/mild-steel-pipes' element={<MildSteel/>} />
        <Route path='/products/pipes-tubes/copper-pipes' element={<Copper />} />
        <Route path='/products/pipes-tubes/brass-pipes' element={<Brass />} />


      </Routes>

      <Footer />
    </div>
  )
}

export default App