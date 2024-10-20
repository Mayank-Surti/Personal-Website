import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  const imageSize = 150

  return (
    <div className='border-b border-neutral-700 pt-10 pb-2'>
      <h3 className='text-3xl pb-5'>Projects</h3>
      <div className=''>
        {PROJECTS.map((project, index) => (
          <div key={index} className="lg:flex py-5">
            <img src={project.image} alt={project.title} width={imageSize} height={imageSize} className='rounded-2xl mr-6 mb-5 w-3/4 lg:w-1/4' />
            <div>
              <h4 className='font-bold pb-2'>{project.title}</h4>
              <p className='font-thin pb-4 text-neutral-400'>{project.description}</p>
              <div className='flex flex-wrap'>
                {project.technologies.map((tech, index) => (
                  <p key={index} className='mr-2 mb-8 py-0.5 px-2 text-sm bg-neutral-800 rounded text-purple-500 font-medium'>{tech}</p>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects