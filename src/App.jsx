import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Eye from './components/Eye.jsx'
import Feature from './components/Feature.jsx'
import Ready from './components/Readytostart.jsx'
import Footer from './components/Footer.jsx'
import Aboutpage from './components/Aboutpage.jsx'
import Contactpage from './components/Contactpage.jsx'
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar />
     <LandingPage />
     <Marquee />
     <About />
     <Eye />
     <Feature />
     <Ready />
     <Footer /></>,
  },
  {
   path: "/about",
   element: <><Navbar /><Aboutpage /> </>,
  },
  {
   path: "/contact",
   element: <><Navbar /><Contactpage /> </>,
  },
  ]);
  
  return (
    <div className="font-['NeueR']">
    <RouterProvider router={router} />
    </div>
 )}