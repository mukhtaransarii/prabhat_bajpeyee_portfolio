import React from 'react'

export default function Feature() {
  const projects = [
    {
      title: '• BHARAT MANDAPAM',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Bharat_Mandapam_Pragati_Maidan.jpg',
      services: ['STONE DESIGN', 'INSTALLATION']
    },
    {
      title: '• CTRL DATA CENTRE',
      image: 'https://www.ctrls.com/wp-content/uploads/2024/02/Mumbai.-DC-3.jpg',
      services: ['ELECTRICAL WORK', 'IT WORK']
    },
    {
      title: '• SANALI SPAZIO, HIGHTECH CITY',
      image: 'https://pbs.twimg.com/media/FQtR8ZjVQAY1BNB.jpg',
      services: ['INTERIOR WORK', 'IT WORK']
    },
    {
      title: '• PADMAJA HARBAL FOOD',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBrij0IbfOsVr13V0RdZVxu-jZmfDsbrA6w&s',
      services: ['CIVIL WORK', 'MEP WORK', 'IT WORK']
    },
    {
      title: '• IMPERIAL MARTOR, PUNE',
      image: 'https://static.ambitionbox.com/api/v2/photo/bUpWSUFzVGVkU3JpVkZkeHBXcVNoQT09',
      services: ['INTERIOR WORK', 'MEP WORK', 'IT WORK']
    },
    {
      title: '• TVS CBRE MEDIASITI',
      image: 'https://files.smartworksoffice.com/uploads/3_4be40af3f9.webp',
      services: ['INTERIOR WORK', 'MEP WORK', 'IT WORK']
    },
    {
      title: '• STILLWOOD RESORT',
      image: 'https://atmospherecore.eme-devops.com/2023/10/IND6.jpg',
      services: ['INTERIOR WORK', 'MEP WORK', 'IT WORK']
    }
  ]

  return (
    <div className="overflow-hidden rounded-t-[2vw]" id="project">
        <div class="p-8  text-[8vw] md:text-[5vw] border-b-[1px] border-black">Featured Project</div>

        <div class="cardOuterBox grid justify-between grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} class="cardInnerbox p-8">
               <h2 className="text-[4vw] md:text-[2vw]">{project.title}</h2>
               <div style={{
                 backgroundImage: `url(${project.image})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 width: '100%',
                 height: '70vh',
                 borderRadius: '1vw',
                 marginBottom: '2vw',
                 marginTop: '2vw'
               }}></div>
               {project.services.map((service, index) => (
                 <button key={index} className="border-zinc-950 border-[1px] rounded-[100px] px-3 w-fit mr-3 mb-3">{service}</button>
               ))}
            </div>
          ))}
        </div>
        {/* <div class="w-full grid place-items-center py-5">
             <button className="bg-black text-white p-4 rounded-[100px] flex gap-2 items-center">FOLLOW ME ON INSTAGRAM <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg></button>
        </div> */}
    </div>
  )
}