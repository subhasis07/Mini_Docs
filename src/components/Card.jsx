import React from 'react'
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RiChatDownloadFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data , reference}) {
  return (
    <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale:1.1}}  
        dragElastic={0.2}  
        dragTransition={{bounceStiffness:100 , bounceDamping:300}}
        className='relative w-56 h-72 rounded-[25px] bg-zinc-900 text-white px-5 py-8 m-5 cursor-pointer overflow-hidden'>
        <MdOutlineStickyNote2 />

        <p className=' text-sm leading-tight mt-5 font-semibold'>
            {data.desc}
        </p>

        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between px-7 mb-3'>
                <h4>{data.fileSize}</h4>

                {data.close ? <IoMdCloseCircle /> : <RiChatDownloadFill />}
                
            </div>


            {
                data.tag.isOpen && (
                    <div className='tags w-full py-3 bg-sky-300 flex items-center justify-center'>
                        <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card