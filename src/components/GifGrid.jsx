import React from 'react'
import PropTypes from 'prop-types'
import { data as search } from '@api/search.json'

function GifGrid ({ title }) {
  return (
    <>
      <section className='w-11/12'>
        <h2 className='text-xl md:text-2xl my-8 overflow-hidden text-nowrap text-ellipsis'>{title}</h2>
        <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {search.map((gif) => (
            <article key={gif.id} className='flex flex-col gap-y-3'>
              <img src={gif.images.original.url} alt={gif.title} className='w-full h-auto cursor-pointer hover:opacity-50 hover:scale-105 transition-all' />
              <p>{gif.title}</p>
            </article>
          ))}
        </main>
      </section>
    </>
  )
}

export default GifGrid

GifGrid.propTypes = {
  title: PropTypes.string.isRequired
}
