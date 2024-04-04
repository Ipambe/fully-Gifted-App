import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
// import { API_KEY } from '@config'
// import.meta.env.VITE_API_KEY
const API_KEY = import.meta.env.VITE_API_KEY
// import trendingGifs from '@api/TRENDING.json'

export function useGifs () {
  const [allGifs, setAllGifs] = useState({})
  const [offset, setOffset] = useState(Array.from({ length: 10 }, (_, i) => i))
  const [imageInfo, setImageInfo] = useState()
  const [search, setSearch] = useState('')

  const fetchGifs = async (url) => {
    try {
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // setAllGifs(trendingGifs)
    // fetchGifs('https://api.giphy.com/v1/gifs/trending?api_key=4fDxWVoQHyKTJ1DI68RDBkHA9OGpKbUi&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
    ;(async () => {
      const data = await fetchGifs(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50&offset=0&rating=g&bundle=messaging_non_clips`)
      console.log(data)
      setAllGifs(data)
    })()
    setSearch('')
  }, [])

  const adjustOffset = async (offset = 0, totalCount) => {
    window.scrollTo(0, 0)
    const totalPages = Math.round(totalCount / 50)
    const minPages = Math.min(totalPages, 10)
    setOffset(Array.from({ length: minPages }, (_, i) => {
      if (offset - 5 <= 0) return i
      if (offset + 5 >= totalPages) return totalPages - minPages + i
      return offset + i - 5
    })
    )
  }

  const searchGifs = useCallback(async (inputValue = search, offset = 0) => {
    const url = inputValue === ''
      ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=50&offset=${offset * 50}&rating=g&bundle=messaging_non_clips`
      : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(inputValue)}&limit=50&offset=${offset * 50}&rating=g&lang=en&bundle=messaging_non_clips`
    const data = await fetchGifs(url)
    setSearch(inputValue)
    setAllGifs(data)
    adjustOffset(offset, data.pagination.total_count)
    return data
  }, [search])

  const openModal = (...params) => setImageInfo(params)
  const closeModal = () => setImageInfo('')

  return { searchGifs, adjustOffset, allGifs, offset, imageInfo, search, closeModal, openModal }
}
