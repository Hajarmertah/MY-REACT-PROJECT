import Barchart from './components/BarChart'
import Barchart2 from './components/BarChart2'
import Barchart3 from './components/BarChart3'
import Barchart4 from './components/BarChart4'
import Barchart5 from './components/BarChart5'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from "./pages/Private/Private"
import PrivateHome from "./pages/Private/PrivateHome/PrivateHome"

function App() {
  return (
    < >
      
      <SignUpModal/>
      <SignInModal/>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/private" element={<Private/>}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
        <Route path="/Barchart" element={<Barchart/>}/>
        <Route path="/Barchart2" element={<Barchart2/>}/>
        <Route path="/Barchart3" element={<Barchart3/>}/>
        <Route path="/Barchart4" element={<Barchart4/>}/>
        <Route path="/Barchart5" element={<Barchart5/>}/>

       </Routes>
    
    </>
  );
}

export default App;
