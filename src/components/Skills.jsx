import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from "react-icons/fa";


const Skills = () => {
    const twcIcon = 'border-2 border-neutral-800 rounded-2xl p-3 flex items-center gap-2 text-lg'

    return (
        <div className='border-b border-neutral-700 py-10'>
            <h3 className='text-3xl pb-6'>Skills</h3>
            <div className='flex flex-wrap gap-3 text-neutral-300'>
                <div className={twcIcon}>
                    <FaHtml5 className='text-2xl' />
                    <p className='text-sm'>HTML</p>
                </div>
                <div className={twcIcon}>
                    <FaCss3Alt className='text-2xl' />
                    <p className='text-sm'>CSS</p>
                </div>
                <div className={twcIcon}>
                    <RiJavascriptFill className='text-2xl' />
                    <p className='text-sm'>Javascript</p>
                </div>
                <div className={twcIcon}>
                    <FaJava className='text-2xl' />
                    <p className='text-sm'>Java</p>
                </div>
                <div className={twcIcon}>
                    <FaReact className='text-2xl' />
                    <p className='text-sm'>React</p>
                </div>
                <div className={twcIcon}>
                    <RiTailwindCssFill className='text-2xl' />
                    <p className='text-sm'>Tailwind</p>
                </div>
            </div>
        </div>
    )
}

export default Skills