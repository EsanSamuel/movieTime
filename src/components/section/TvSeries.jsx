import React, { useState, useEffect } from 'react'
import { SeriesCard } from '../sectionData'
import { Loader } from './'

const API_TV = 'https://api.themoviedb.org/3/tv/popular?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'

const TvSeries = () => {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(API_TV)
            .then((res) => res.json())
            .then(data => {
                setSeries(data.results)
            })
    }, [])


    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {series?.length > 0 ? (
                        <div className='flex  flex-cols w-[97vw] gap-3 details p-10'>
                            <h1 className='absolute lg:text-[25px] xs:text-[15px]'>Popular Tv Series</h1>
                            {series.map((seriesreq) => (
                                <SeriesCard key={seriesreq.id} {...seriesreq} />
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

export default TvSeries