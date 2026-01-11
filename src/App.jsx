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
import StainlessSteelTube from './assets/pages/products/tubes/StainlessSteelTube.jsx'
import CarbonSteelTube from './assets/pages/products/tubes/CarbonSteelTube.jsx'
import HastelloyTube from './assets/pages/products/tubes/HastelloyTube.jsx'
import IncoloyTube from './assets/pages/products/tubes/IncoloyTube.jsx'
import MonelTube from './assets/pages/products/tubes/MonelTube.jsx'
import TitaniumTube from './assets/pages/products/tubes/TitaniumTube.jsx'
import TantalumTube from './assets/pages/products/tubes/TantalumTube.jsx'
import AluminiumTube from './assets/pages/products/tubes/AluminiumTube.jsx'
import DuplexSteelTube from './assets/pages/products/tubes/DuplexSteelTube.jsx'
import NickelTube from './assets/pages/products/tubes/NickelTube.jsx'
import AlloySteelTube from './assets/pages/products/tubes/AlloySteelTube.jsx'
import CopperTube from './assets/pages/products/tubes/CopperTube.jsx'
import BrassTube from './assets/pages/products/tubes/BrassTube.jsx'
import Quality from './assets/pages/Quality.jsx'
import ChemicalComposition from './assets/pages/tech-info/ChemicalComposition.jsx'
import MechanicalProperties from './assets/pages/tech-info/MechanicalProperties.jsx'
import WeightChart from './assets/pages/tech-info/WeightChart.jsx'

import Certification from './assets/pages/Certification.jsx'
import CareerPage from './assets/pages/Career.jsx'
import DimensionChart from './assets/pages/tech-info/DimensionChart.jsx'
import HardoxPlate from './assets/pages/products/plates/HardoxPlate.jsx'
import CortenSteelPlate from './assets/pages/products/plates/CortenSteelPlate.jsx'
import BoilerQualityPlate from './assets/pages/products/plates/BoilerQualityPlate.jsx'
import ManganesePlate from './assets/pages/products/plates/ManganesePlate.jsx'
import NickelAlloyPlate from './assets/pages/products/plates/NickelAlloyPlate.jsx'
import ChromeMolyPlate from './assets/pages/products/plates/ChromeMolyPlate.jsx'
import PressureVesselPlate from './assets/pages/products/plates/PressureVesselPlate.jsx'
import StainlessSteelPlate from './assets/pages/products/plates/StainlessSteelPlate.jsx'
import CarbonSteelPlate from './assets/pages/products/plates/CarbonSteelPlate.jsx'
import OffshoreSteelPlate from './assets/pages/products/plates/OffshoreSteelPlate.jsx'




function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/quality' element={<Quality/>} />
        <Route path='/certification' element={<Certification/>} />
        <Route path='/career' element={<CareerPage/>} />



        <Route path='tech-info/chemical-composition' element={<ChemicalComposition/>} />
        <Route path='tech-info/mechanical-properties' element={<MechanicalProperties/>} />
        <Route path='tech-info/weight-chart' element={<WeightChart/>} />
        <Route path='tech-info/dimensions' element={<DimensionChart/>} />



        <Route path='/products/flanges/weld-neck-flange' element={<WeldNeck />} />
        <Route path='/products/flanges/slip-on-flange' element={<SlipOn />} />
        <Route path='/products/flanges/socket-weld-flange' element={<SocketWeld />} />
        <Route path='/products/flanges/threaded-flange' element={<Threaded />} />
        <Route path='/products/flanges/blind-flange' element={<Blind />} />


        
        <Route path='/products/pipes/stainless-steel-pipes' element={<StainlessSteel />} />
        <Route path='/products/pipes/carbon-steel-pipes' element={<CarbonSteel />} />
        <Route path='/products/pipes/hastelloy-pipes' element={<Hastelloy />} />
        <Route path='/products/pipes/incoloy-pipe' element={<Incoloy />} />
        <Route path='/products/pipes/monel-pipe' element={<Monel />} />
        <Route path='/products/pipes/titanium-pipe' element={<Titanium />} />
        <Route path='/products/pipes/tantalum-pipe' element={<Tantalum />} />
        <Route path='/products/pipes/aluminium-pipe' element={<Aluminium />} />
        <Route path='/products/pipes/duplex-steel-superduplex-steel-pipe' element={<Duplex />} />
        <Route path='/products/pipes/nickel-pipe' element={<Nickel />} />
        <Route path='/products/pipes/alloy-steel-pipes' element={<AlloySteel/>} />
        <Route path='/products/pipes/mild-steel-pipes' element={<MildSteel/>} />
        <Route path='/products/pipes/copper-pipes' element={<Copper />} />
        <Route path='/products/pipes/brass-pipes' element={<Brass />} />



        <Route path='/products/tubes/stainless-steel-tubes' element={<StainlessSteelTube />} />
        <Route path='/products/tubes/carbon-steel-tubes' element={<CarbonSteelTube />} />
        <Route path='/products/tubes/hastelloy-tubes' element={<HastelloyTube />} />
        <Route path='/products/tubes/incoloy-tubes' element={<IncoloyTube/>} />
        <Route path='/products/tubes/monel-tubes' element={<MonelTube />} />
        <Route path='/products/tubes/titanium-tubes' element={<TitaniumTube />} />
        <Route path='/products/tubes/hastelloy-tubes' element={<HastelloyTube />} />
        <Route path='/products/tubes/tantalum-tubes' element={<TantalumTube />} />
        <Route path='/products/tubes/aluminium-tubes' element={<AluminiumTube />} />
        <Route path='/products/tubes/duplex-steel-super-duplex-steel-tube' element={<DuplexSteelTube />} />
        <Route path='/products/tubes/nickel-tube' element={<NickelTube />} />
        <Route path='/products/tubes/alloy-steel-tube' element={<AlloySteelTube />} />
        <Route path='/products/tubes/copper-tube' element={<CopperTube />} />
        <Route path='/products/tubes/brass-tube' element={<BrassTube />} />



        <Route path='/products/plates/hardox-plate' element={<HardoxPlate/>} />
        <Route path='/products/plates/corten-steel-plate' element={<CortenSteelPlate/>} />
        <Route path='/products/plates/boiler-quality-plate' element={<BoilerQualityPlate/>} />
        <Route path='/products/plates/manganese-plate' element={<ManganesePlate/>} />
        <Route path='/products/plates/nickel-alloy-plate' element={<NickelAlloyPlate/>} />
        <Route path='/products/plates/chrome-moly-plate' element={<ChromeMolyPlate/>} />
        <Route path='/products/plates/pressure-vessel-plate' element={<PressureVesselPlate/>} />
        <Route path='/products/plates/stainless-steel-plate' element={<StainlessSteelPlate/>} />
        <Route path='/products/plates/carbon-steel-plate' element={<CarbonSteelPlate/>} />
        <Route path='/products/plates/offshore-steel-plate' element={<OffshoreSteelPlate/>} />
        <Route path='/products/plates/stainless-steel-plate' element={<StainlessSteelPlate/>} />


      </Routes>

      <Footer />
    </div>
  )
}

export default App