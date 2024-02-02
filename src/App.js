import './App.css';



import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Pages/Home.js"
// import About from "./Pages/"

// import Contact from "./Contact"

// import { FaRegMessage } from "react-icons/fa6";



import { Routes, Route } from "react-router-dom"
import Menubar from './Components/Menubar/Menubar.js';

import Footers from './Components/Footers/Footers.js';
import Aboutme from './Pages/Aboutme.js';
import Coaching from './Pages/Coaching.js';
// import Contactme from './Components/Contactme/Contactme.js';
import Clientstory from './Pages/Clientstory.js';
import Allprices from './Pages/Allprices.js';


function App() {
  const option = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  return (
    <div className=''>

      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <Aboutme/> } />
        <Route path="/coaching" element={ <Coaching/> } />
        {/* <Route path="/contactme" element={ <Contactme/> } /> */}
        <Route path="/clientstory" element={ <Clientstory/> } />
        <Route path="/allprices" element={ <Allprices/> } />
        
        {/* <Route path="/contact" element={ <Contact/> } /> */}
      </Routes>
      
      <Footers></Footers>
    </div >


  );
}

export default App;
