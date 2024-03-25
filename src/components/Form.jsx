import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import SearchSvg from './SearchSvg'

function Form ({ setSearch }) {
  const handleFormSubmit = useCallback((e) => {
    e.preventDefault()
    e.target.gif.focus()
    if (e.target.gif.value.trim() === '') return
    setSearch(e.target.gif.value)
  }, [setSearch])

  return (
    <form onSubmit={handleFormSubmit} className='mt-12 flex justify-between border rounded-3xl border-white overflow-hidden  w-4/5 md:w-2/3 lg:w-1/2'>
      <input placeholder='A baby crying' type='text' id='gif' name='gif' className='flex-grow border-0 outline-0 bg-transparent pl-6 pr-4 md:text-xl md:py-4' />
      <button className='p-2 md:p-4 border-l border-l-slate-300 '>
        <SearchSvg />
      </button>
    </form>
  )
}

export default Form

Form.propTypes = {
  setSearch: PropTypes.func.isRequired
}
