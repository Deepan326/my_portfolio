import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='pb-4 py-4' id="experience">
      <h2 className='my-20  text-center text-4xl font-bold'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            
            {/* Left Section - Year */}
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-stone-400'>
                {experience.year}
              </p>
            </div>

            {/* Right Section - Details */}
            <div className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 font-semibold text-lg'>
                {experience.company}{" "}
                <span className='text-sm text-stone-500'>
                  – {experience.role}
                </span>
              </h3>

              <p className='mb-2 text-stone-400'>
                {experience.description}
              </p>

              {/* Technologies — each set on a new line */}
              <div className='mt-2 flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors duration-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
