import React from 'react'
import PropTypes from 'prop-types'

function ModalGif ({ imageInfo, closeModal }) {
  return (
    <div className='fixed w-screen h-screen'>
      <div className='fixed w-screen h-screen bg-black opacity-70' />
      <button onClick={closeModal} className='fixed top-0 right-0 m-4 p-2 bg-black text-white rounded-full'>X</button>
      <img src={imageInfo[0]} alt={imageInfo[1]} className='fixed inset-0 m-auto z-10' />
    </div>
  )
}

export default ModalGif

ModalGif.propTypes = {
  imageInfo: PropTypes.array,
  closeModal: PropTypes.func
}
