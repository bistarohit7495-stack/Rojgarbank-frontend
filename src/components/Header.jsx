import React from 'react'
import { Button } from './ui/button'
import { IoSearchSharp } from "react-icons/io5";
import image from '../assets/home.png'


const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={image} alt="" className="w-full h-[450px] shadow-l" />
                <div className="flex flex-col gap-5 my-10">
                    <span className="px-4 py-2 mx-auto rounded-full shadow-lg bg-gray-200 font-semibold text-sky-600">Your Gateway to Career Success </span>
                    <h2 className="text-4xl font-bold">
                        Building Nepal's Future,One Career at a Time with <span className='text-[#1a487c]'>Rojgar</span>
                        <span className='text-[#2187c6]'> Bank</span>
                    </h2>
                    <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full item-center  gap-4 mx-auto">
                        <div className='translate-y-3'>
                        <IoSearchSharp/>
                        </div>
                            <input type="text"
                                placeholder="Search Job"
                                className="outline-none border-name w-full h-10 ">
                            </input>

                        <Button className='flex item-center rounded-full bg-sky-600 translate-y-1 -translate-x-2  px-8 '> Search</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header