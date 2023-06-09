import React from 'react'
import { AiFillPhone , AiOutlineClockCircle } from "react-icons/ai";
import { MdCardTravel } from "react-icons/md";

function TopBar() {
    return (
        <nav className='flex justify-between items-center px-4 py-3'>
            <div className="flex items-center">
                <MdCardTravel size={30} className='text-[#02D8F2] mr-2' />
                <h1 className='uppercase text-xl font-bold text-gray-700 '>Jelajah Sumut</h1>
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-10">
                    <AiOutlineClockCircle size={30} className='mr-2 text-[#02D8F2]' />
                    <p className='text-[15px] text-gray-700'>08:00 WIB - 21.00 WIB </p>
                </div>
                <div className="hidden md:flex items-center px-1">
                    <AiFillPhone size={30} className='mr-2 text-[#02D8F2]' />
                    <p className='text-gray-700 text-[15px]'>061-882-4656</p>
                </div>
            </div>
        </nav>
    );
}

export default TopBar
