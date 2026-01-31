import React from 'react'
import { CERTIFICATES } from '../constants'

const Certificate = () => {
  return (
    <section className='py-25 px-4 text-white mt-16' id="certificate">
      <h2 className='mb-12 text-center text-4xl font-bold'>Certificates</h2>

      <div className='space-y-12'>
        {CERTIFICATES.map((certificate, index) => (
          <div
            key={index}
            className='bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row lg:items-start gap-6 p-6'
          >
            
            {/* Image Section */}
            <div className='flex justify-center mt-4 lg:justify-start lg:w-1/3'>
              <img
                src={certificate.image}
                alt={certificate.title}
                className='w-full h-[250px] object-cover rounded-md hover:scale-105 transition-transform duration-300 ease-in-out'
              />
            </div>

            {/* Content Section */}
            <div className='lg:w-2/3 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold mb-3'>{certificate.title}</h3>
              <p className='text-gray-400 mb-4'>{certificate.year}</p>
              <p className='text-gray-400 mb-4'>{certificate.description}</p>
              

              <div className='flex flex-wrap gap-2 mb-4'>
                {certificate.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200 hover:bg-gray-700 transition'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {certificate.Live && (
                <a
                  href={certificate.Live}
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

export default Certificate
