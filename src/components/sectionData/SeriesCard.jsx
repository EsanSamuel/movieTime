import React,{useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const API_IMG = 'https://image.tmdb.org/t/p/original/'

const TvSeries1 ={
    "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    "first_air_date": "2023-01-15",
    "genre_ids": [
        18
    ],
    "id": 100088,
    "name": "The Last of Us",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_name": "The Last of Us",
    "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    "popularity": 3795.042,
    "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    "vote_average": 8.8,
    "vote_count": 2389
}

const SeriesCard = ({ name, poster_path, first_air_date,vote_average,overview,original_language }) => {
  const [showDetails, setShowDetails] = useState(false)
    return (
        <div className='movies'>
      <div>
        <img className='rounded-lg w-[200px] h-[300px] ml-[0px] img mt-[40px]' src={API_IMG + poster_path} onClick={()=>setShowDetails(true)} />
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

export default SeriesCard