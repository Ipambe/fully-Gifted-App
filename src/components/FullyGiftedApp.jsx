import React from 'react'
import Header from './Header'
import Form from './Form'
import GifGrid from './GifGrid'
import ModalGif from './ModalGif'
import Pagination from './Pagination'
import { useGifs } from '../customHooks/useGifs'

// `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`

function FullyGiftedApp () {
  const { searchGifs, allGifs, offset, imageInfo, search, closeModal, openModal } = useGifs()
  return (
    <>
      {imageInfo && <ModalGif imageInfo={imageInfo} closeModal={closeModal} />}
      <Header />
      <Form searchGifs={searchGifs} />
      <GifGrid search={search} openModal={openModal} allGifs={allGifs} />
      <Pagination allGifs={allGifs} offset={offset} searchGifs={searchGifs} search={search} />
    </>
  )
}

export default FullyGiftedApp
