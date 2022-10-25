import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] x:px-10 min-h-0 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-1xl">Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-white text-sm'>Proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
        
        </motion.div>
  )
}

export default Skills