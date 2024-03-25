import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import GifGrid from './GifGrid'
import axios from 'axios'
import { API_KEY } from '@config'
import { data as categories } from '@api/CATEGORIES.json'

// `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`
// `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=50&offset=${offset}&rating=g&lang={lang}&bundle=messaging_non_clips`

const allCategories = categories.reduce((a, b) => {
  return [...a, b.name]
}, [])

console.log(allCategories)

function FullyGiftedApp () {
  const [search, setSearch] = useState('')
  // const [offset, setOffset] = useState(0)
  // const [lang, setLang] = useState('en')

  return (
    <>
      <Header />
      <Form setSearch={setSearch} />
      <GifGrid title={search} />
    </>
  )
}

export default FullyGiftedApp
