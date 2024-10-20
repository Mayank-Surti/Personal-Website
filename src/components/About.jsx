import React from 'react'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-700 py-10'>
      <h1 className='text-5xl font-thin pb-5'>Mayank Surti</h1>
      <p className='font-thin text-neutral-300'>{ABOUT_TEXT}</p>
    </div>
  )
}

export default About