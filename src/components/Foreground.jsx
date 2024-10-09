import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref=useRef(null);

  const data =[
    {
      desc:"this is a note",
      fileSize:"0.4mb",
      close:false,
      tag:{
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"blue"
      }
    }
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground