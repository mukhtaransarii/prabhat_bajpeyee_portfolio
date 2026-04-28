import React, {useEffect , useRef, useState} from 'react'

export default function Aboutpage() {
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
     
     <h1 class="pl-8 GroteskFont font-semibold  text-[10vw] md:text-[6vw]  mt-8">ABOUT</h1>
     <div class="cardInnerbox p-8">
             <h2 className="text-[4vw] md:text-[2vw]">• Prabhat Bajpeyee</h2>
             <div class="card bg-center bg-no-repeat bg-cover bg-[url('../../public/PRABHAT.JPEG')] w-full h-[30vh] md:w-[40vw] md:h-[30vw] bg-zinc-500 rounded-xl my-[4vw]  md:my-[2vw]"></div>
             <p className="text-[4vw] md:text-[2vw] mb-2">
                Prabhat Bajpeyee is a seasoned MEP and IT expert with 5+ years of experience in delivering high-quality solutions for complex construction projects.
              </p>
             <button className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">WE</button>
             <button className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">CREATE</button>
             <button className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">INTERIOR</button>
             <button className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">MEP</button>
             <button className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">IT</button>
          </div>
    </div>
  )
}