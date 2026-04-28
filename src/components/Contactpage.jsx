import React, {useEffect , useRef, useState} from 'react'

export default function Contactpage() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180)
    })
  })
  return (
    <div className="">
      <div class="box bg-[#CDEA68] h-[30vh] md:h-[50vh] relative overflow-hidden">
       <div class="eyeBackground w-fit flex gap-[5vw] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ">
        <div class="eye h-[40vw] w-[40vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[25vw] w-[25vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[5vw] w-[5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
        <div class="eye h-[40vw] w-[40vw] bg-white rounded-[50%] grid place-items-center">
            <div class="eye h-[25vw] w-[25vw] bg-black rounded-[50%] relative">
               <div style={{transform: `translateY(-50%) rotate(${rotate}deg)`}} class="div w-full h-[3vw] absolute top-1/2 -translate-y-1/2">
                 <div class="eye h-[5vw] w-[5vw] bg-white rounded-[50%]"></div>
               </div>
           </div>
        </div>
      </div>
     </div>
     
     <h1 class="pl-8 GroteskFont font-semibold  text-[10vw] md:text-[6vw]  mt-8">CONTACT</h1>
     <form action="" className="px-8 w-full md:w-[40vw]">
      <label for="name" className="text-[3vw] md:text-[1vw]">Full Name</label>
      <input type="text" id="name" className="w-full h-10 border mb-2 px-3 rounded" />
      
      <label for="email" className="text-[3vw] md:text-[1vw]">Email</label>
      <input type="email" id="email" className="w-full h-10 border mb-2 px-3 rounded" />
      
      <label for="message" className="text-[3vw] md:text-[1vw]">Message</label>
      <textarea type="text" id="message" rows="5" className="w-full border mb-2 p-3 rounded leading-none"></textarea>
      
      <input type="submit" id="name" className="bg-black text-white text-[3.5vw] md:text-[1vw] w-full h-10 border mb-2 px-3 rounded" />
     </form>
     
    </div>
  )
}