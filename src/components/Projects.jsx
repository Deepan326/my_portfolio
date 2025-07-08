import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section className='py-16 bg-gray-950 text-white'>
      <h2 className='mb-12 text-center text-4xl font-bold'>Projects</h2>

      <div className='space-y-16'>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start'
          >
            {/* Project Image */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'
              />
            </div>

            {/* Project Info */}
            <div className='lg:col-span-2'>
              <h3 className='text-2xl font-semibold mb-3'>{project.title}</h3>
              <p className='text-gray-400 mb-4'>{project.description}</p>

              {/* Technologies */}
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

              {/* Live Demo */}
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
