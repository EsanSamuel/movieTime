import React, { useState, useEffect } from 'react'
import { MovieCard } from '../sectionData'
import { Loader } from './'


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'



const Movies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    


    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results);
            })
    }, [])



    return (
        <div>
        {loading ? (
            <Loader className='flex items-center justify-center' />
        ):(
            <>
            {movies?.length > 0 ? (
                <div className='flex flex-cols w-[97vw] gap-3 details p-10'>
                <h1 className='absolute lg:text-[25px] xs:text-[15px]'>Popular Movies</h1>
            {movies.map((movie) =>
                    <MovieCard key={movie.id} {...movie} />)}
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

export default Movies