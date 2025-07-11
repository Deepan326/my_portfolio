import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section className='py-20 px-4  text-white mt-10' id="projects">
      <h2 className='mb-12 text-center text-4xl font-bold'>Projects</h2>

      <div className='space-y-12'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row lg:items-start gap-6 p-6'
          >
            
            <div className='flex justify-center lg:justify-start lg:w-1/3'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full max-w-md rounded-md object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
              />
            </div>

            
            <div className='lg:w-2/3 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
              <p className='text-gray-400 mb-4'>{project.description}</p>

             
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200 hover:bg-gray-700 transition'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              {project.Live && (
                <a
                  href={project.Live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block text-blue-400 underline hover:text-blue-300 transition'
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
