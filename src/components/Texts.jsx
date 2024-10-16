import React from 'react'
import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})
const Texts = () => {

  return (
    <div>
        <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="knewave-regular text-white pb-8 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-18xl">
                         Iscream
        </motion.h1>
        <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-white">
                        อยากลองชิมรสชาติใหม่ๆ  ไอศกรีม Madger จะทำให้คุณรู้สึกตื่นเต้นกับรสชาติที่ผสมผสานกันอย่างลงตัว เพลิดเพลินกับไอศกรีมที่ทำด้วยมืออย่างพิถีพิถันซึ่งไม่เหมือน อะไรที่คุณเคยสัมผัสมาก่อน
        </motion.p>
    </div>
  )
}

export default Texts

