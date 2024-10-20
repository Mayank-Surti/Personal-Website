import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="py-10">
        <h3 className='flex justify-center text-3xl pb-6'>Contact</h3>
        <div className='flex flex-wrap justify-center items-center gap-12'>
            <a href="#"><IoMdMail className='text-3xl hover:text-purple-400'/></a>
            <a href="#"><FaLinkedin className='text-3xl hover:text-purple-400'/></a>
            <a href="#"><FaGithub className='text-3xl hover:text-purple-400'/></a>
        </div>
    </div>
  )
}

export default Contact