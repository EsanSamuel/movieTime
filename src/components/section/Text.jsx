import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Input = ({ placeholder, value, handleChange }) => (
  <input
    placeholder={placeholder}
    value={value}
    className='bg-[#fff] xs:text-[15px] w-full h-[40px] p-5 pl-10 rounded-full border text-black'
    onChange={handleChange}

  />



)


const Text = () => {
  const [search, setSearch] = useState('')

  const searchMovie = async (e) => {
    e.preventDefault()
    try {
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setSearch(e.target.value)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-20 navbar'>
      <h1 className='text-white xs:text-center text-[30px] tt pb-6'>Get Movies,Tv shows data for free. Explore now.</h1>
      <div className=''>
        <Input
          placeholder='Search for a Movie or Tv show'
          value={search}
          handleChange={searchMovie}

        />
        <AiOutlineSearch className='search ml-[10px]' />
      </div>
    </div>
  )
}

export default Text