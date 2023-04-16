import React, { useState, useEffect } from 'react'
import { TopRatedTvCard } from '../sectionData'
import { Loader } from './'


const API_TOP_RATED_TV = 'https://api.themoviedb.org/3/tv/top_rated?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'

const TopRatedTv = () => {
    const [topRatedTv, setTopRatedTv] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(API_TOP_RATED_TV)
            .then((res) => res.json())
            .then(data => {
                setTopRatedTv(data.results)
            })
    }, [])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {topRatedTv?.length > 0 ? (
                        <div className='flex flex-cols w-[97vw] gap-3 details p-10'>
                            <h1 className='absolute lg:text-[25px] xs:text-[15px]'>Top Rated Tv Series</h1>
                            {topRatedTv.map((toptv) => (
                                <TopRatedTvCard key={toptv.id} {...toptv} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex items-center justify-center'>
                            <Loader />
                        </div>
                    )}
                </>
            )}
        

        </div>

    )
}

export default TopRatedTv