import React, { useState, useEffect } from 'react'
import { TopRatedMovieCard } from '../sectionData'
import { Loader } from './'

const API_TOP_RATED_MOVIE = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'

const TopRatedMovies = () => {
  const [topMovies, setTopMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(API_TOP_RATED_MOVIE)
      .then((res) => res.json())
      .then(data => {
        setTopMovies(data.results)
      })
  }, [])

  return (
    <div>
    {loading ? (
      <Loader />
    ):(
      <>
      {topMovies?.length >0?(
        <div className='flex flex-cols w-[97vw] gap-3 details p-10'>
    <h1 className='absolute lg:text-[25px] xs:text-[15px]'>Top Rated Movies</h1>
    {topMovies.map((topmovie) =>
        <TopRatedMovieCard key={topmovie.id} {...topmovie} />)}

</div>
      ):(
        <div className='flex items-center justify-center'>
            <Loader />
            </div>
      )}
    
</>
    )}
    </div>
  )
}

export default TopRatedMovies