import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const top_rated_series1 = {
  "backdrop_path": "/99vBORZixICa32Pwdwj0lWcr8K.jpg",
  "first_air_date": "2021-09-03",
  "genre_ids": [
    10764
  ],
  "id": 130392,
  "name": "The D'Amelio Show",
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_name": "The D'Amelio Show",
  "overview": "From relative obscurity and a seemingly normal life, to overnight success and thrust into the Hollywood limelight overnight, the D’Amelios are faced with new challenges and opportunities they could not have imagined.",
  "popularity": 14.49,
  "poster_path": "/phv2Jc4H8cvRzvTKb9X1uKMboTu.jpg",
  "vote_average": 8.9,
  "vote_count": 3183
}

const API_IMG = 'https://image.tmdb.org/t/p/original/'

const TopRatedTvCard = ({ name, first_air_date, poster_path, overview, vote_average, original_language }) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className='movies'>
      <div>
        <img className='rounded-lg w-[200px] h-[300px] ml-[0px] img mt-[40px]' src={API_IMG + poster_path} onClick={() => setShowDetails(true)} />
        <div className='bg-[0,0,0,0.5]'>
          <h2 className=' text-center w-[200px] flex justify-center items-center'>{name}</h2>
          <h3 className='text-center text-[#aaa]'>{first_air_date}</h3>
        </div>



      </div>

      {showDetails && (
        <div className='flex items-center justify-center'>
          <div className=' lg:w-[50%]  z-10 h-auto p-10 bg-[white] border border-bold rounded-lg fixed card'>
            <AiOutlineClose className='float-right' onClick={() => setShowDetails(false)} />
            <h1 className='text-[30px]'>{name}</h1>
            <h1 className='float-right mt-10'><span>Original Language</span>:  {original_language}</h1>
            <img className='rounded w-[30%] h-[30%] ml-[0px] p-5 imgx mt-[40px]' src={API_IMG + poster_path} />
            <p className='pb-5 text-[#aaa]'><span>Rating</span>  :{vote_average}</p>

            <h1 className=''>{overview}</h1>

          </div>
        </div>
      )}
    </div>
  )
}

export default TopRatedTvCard