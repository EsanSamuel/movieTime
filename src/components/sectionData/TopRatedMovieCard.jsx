import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const top_rated_movie1 = {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
        18,
        80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 108.335,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 17571
}

const API_IMG = 'https://image.tmdb.org/t/p/original/'

const TopRatedMovieCard = ({ title, release_date, poster_path, original_language, vote_average, overview }) => {
    const [showDetails, setShowDetails] = useState(false)
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
        </div>
    )
}

export default TopRatedMovieCard