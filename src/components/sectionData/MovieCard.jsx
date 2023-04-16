import React, { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const API_CREDIT = 'https://api.themoviedb.org/3/genre/movie/list?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'



const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const API_TRAILER = 'https://api.themoviedb.org/3/movie/550/videos?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'



const Gernes = ({ name }) => (
  <h1>{name}</h1>
)

const MovieCard = ({ title, poster_path, release_date, overview, vote_average, original_language }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [trailer, setTrailer] = useState(true)
  const [details, setDetails] = useState([])


  {/*useEffect(() => {
    fetch(API_TRAILER)
      .then((res) => res.json())
      .then(data => {
        setDetails(data.results)
        console.log(data)
      })

  }, [])*/}


  return (

    <div className='movies'>
      <div>
        <img className='rounded-lg w-[200px] h-[300px] ml-[0px] img mt-[40px]' src={API_IMG + poster_path} onClick={() => setShowDetails(true)} />
        <div className='bg-[0,0,0,0.5]'>
          <h2 className=' text-center w-[200px] flex justify-center items-center'>{title}</h2>
          <h3 className='text-center text-[#aaa]'>{release_date}</h3>
        </div>

      </div>

      {showDetails && (
        <div className='flex items-center justify-center'>
          <div className=' lg:w-[50%]  z-10 h-auto p-10 bg-[white] border border-bold rounded-lg fixed card'>
            <AiOutlineClose className='float-right' onClick={() => setShowDetails(false)} />
            <h1 className='text-[30px]'>{title}</h1>
            <h1 className='float-right mt-10'><span>Original Language</span>:  {original_language}</h1>
            <img className='rounded w-[30%] h-[30%] ml-[0px] p-5 imgx mt-[40px]' src={API_IMG + poster_path} />
            <p className='pb-5 text-[#aaa]'><span>Rating</span>  :{vote_average}</p>


            <h1 className=''>{overview}</h1>

          </div>
        </div>
      )}

      {/*{trailer && (
        <div>
          {details.map((datax)=>(
          <div key={datax.id} {...datax}>
            <h1>{datax.id}</h1>
          </div>
  ))}
  </div>
)}*/}


    </div>
  )
}

export default MovieCard