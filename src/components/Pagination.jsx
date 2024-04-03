import React from 'react'
import PropTypes from 'prop-types'

function Pagination ({ allGifs, offset, searchGifs, search }) {
  if (!(allGifs.pagination)) return null

  const handlePageClick = async (page) => {
    console.log(page)
    if (page < 0 || page > Math.round(allGifs.pagination.total_count / 50)) return
    await searchGifs(search, page)
  }
  return (
    <section className='flex gap-x-8 my-4'>
      <button onClick={() => handlePageClick((Math.round(allGifs.pagination.offset / 50)) - 1)}>atras</button>
      {offset.map((page) => (
        <button key={page} onClick={() => handlePageClick(page)}>{page + 1}</button>
      ))}
      <button onClick={() => handlePageClick((Math.round(allGifs.pagination.offset / 50)) + 1)}>adelante</button>
    </section>
  )
}

export default Pagination

Pagination.propTypes = {
  allGifs: PropTypes.object,
  offset: PropTypes.array,
  searchGifs: PropTypes.func,
  search: PropTypes.string
}
