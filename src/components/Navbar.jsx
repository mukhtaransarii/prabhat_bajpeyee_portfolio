import React, {useRef} from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  const NavRef = useRef();
  const HamX = useRef();
  const HamY = useRef();
  const NAVBACKGROUND = useRef();
 
  function SHOW(){
    NavRef.current.classList.toggle('SHOWNAV')
    HamX.current.classList.toggle('x')
    HamY.current.classList.toggle('y')
  }
  function HIDE() {
   NavRef.current.classList.remove('SHOWNAV')
   HamX.current.classList.remove('x')
   HamY.current.classList.remove('y')
  }
  return (
    <nav ref={NAVBACKGROUND} className="fixed z-[999] backdrop-blur-[8px] bg-[#ffffff2c] top-0 left-0 h-16 w-full  flex justify-between items-center px-8">
      <div className="flex items-center"><h4 className="text-[20px] font-bold">PORTFOLIO</h4></div>
      <div ref={NavRef} class="NAVLIST link flex gap-3">
     
      <Link to="/" onClick={HIDE}><mark className="md:hidden">01</mark>Home</Link>
      <Link to="/about" onClick={HIDE}><mark className="md:hidden">02</mark>About</Link>
      <Link to="/contact" onClick={HIDE}><mark className="md:hidden">03</mark>Contact</Link>
      
      <div class="md:hidden SOCIAL">
        <span>Social</span>
        <ul>
          <a href="https://youtube.com/@prabhatbajpeyee-r702?si=CjpSvWws12EvQ9Xu" >YouTube <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></a>
          <p>+91 9214134616</p>
          <p>prabhatbhajpeyee72@gmail.com</p>
        </ul>
      </div>
      
      </div>
      <div onClick={SHOW} id="HamburgerMenu" className="md:hidden w-[25px] h-[25px] relative">
          <div ref={HamX} class="line1 bg-black w-full h-[1.5px] absolute top-[35%] transition duration-[0.2s]"></div>
          <div ref={HamY} class="line2 bg-black w-full h-[1.5px] absolute bottom-[35%] transition duration-[0.2s]"></div>
      </div>
    </nav>
  )
} 
