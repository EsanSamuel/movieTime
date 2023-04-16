import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMoon } from 'react-icons/bi'

const NavbarItem = ({ title }) => (
    <li className='ml-[40px] cursor-pointer mt-[20px]'>{title}</li>
)

const Navbar = ({ handleToggleDarkMode }) => {
    const [togglemenu, setTogglemenu] = useState(false)


    return (
        <div>
            <div className='w-full px-8 py-4 flex justify-between text-white  items-center navbar'>
                <h1 className=''>MovieTime</h1>
                <ul className='flex items-center ul'>
                    {['Movies', 'TV Series', 'Top Movies', 'Top Series'].map((item, index) => (
                        <NavbarItem key={item + index} title={item} />
                    ))}
                </ul>


                {/*<button className='bg-[#43affc] px-7 py-2 text-white rounded button'>SIgn up</button>*/}
                <BiMoon className='mr-[-140px]' onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} />

                <div className='nav'>
                    {!togglemenu && (
                        <HiMenuAlt4 className='' onClick={() => setTogglemenu(true)} />
                    )}

                    {togglemenu && (
                        <ul className=''>
                            <AiOutlineClose className='ml-[50px]' onClick={() => setTogglemenu(false)} />
                            {['Movies', 'TV Series', 'Top Movies', 'Top Series'].map((item, index) => (
                                <NavbarItem key={item + index} title={item} />
                            ))}
                        </ul>

                    )}

                </div>

            </div>
        </div>



    )
}

export default Navbar