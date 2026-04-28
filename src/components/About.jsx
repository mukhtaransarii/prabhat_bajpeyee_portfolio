import React from 'react'

export default function About() {
  return (
    <div className="bg-[#CDEA68] rounded-t-[2vw] mt-[-2vw]">
      <h1 className="text-[8vw] leading-[7vw] md:text-[5vw] md:leading-[5vw] p-8">
        Prabhat Bajpeyee is a seasoned MEP and IT expert with 5+ years of experience in delivering high-quality solutions for complex construction projects.
      </h1>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="about2 p-8 grid md:grid-cols-3 gap-5">
        <p class="">What you can expect:</p>
        <p class="">We provide comprehensive MEP services, including design, installation, and commissioning of mechanical, electrical, and plumbing systems for commercial, residential, and industrial projects.</p>  
        <p class="">Our team of experts works tirelessly to ensure that every project is completed on time, within budget, and to the highest standards of quality, safety, and efficiency.</p> 
      </div>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="p-8 flex flex-col gap-10 md:flex-row justify-between">
         <div>
           <h1 className="text-[8vw] md:text-[5vw]">Prabhat Bajpeyee</h1>
           <a className="bg-black py-2 px-3 md:py-4 md:px-6 text-white rounded-[100px]" target='_blank'>READ MOREY</a>
         </div>
         <div class="card bg-center bg-no-repeat bg-cover bg-[url(https://www.niceframe.in/wp-content/uploads/2023/03/Spazio-Corporate-office-10-2048x1083-1.jpg)] w-full h-[30vh] md:w-[40vw] md:h-[30vw] bg-zinc-500 rounded-xl my-[4vw]  md:my-[2vw]"></div>
       </div>
    </div>
  )
}