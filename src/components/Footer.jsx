import React from 'react'
import { MdCardTravel } from 'react-icons/md'


const Footer = () => {
    return (
        <footer className='max-w-[1440px] w-full py-10 m-auto bg-gradient mx-auto text-center'>
            <div className='flex items-center m-auto justify-center'>
                <MdCardTravel size={30} className="text-[#fff]" />
                <a href="/home" className="uppercase text-xl mx-2 cursor-pointer text-white">Jelajah Sumut</a>
            </div>
            <p className='text-[20px] text-center text-white'><a href="https://github.com/miratania05" className='hover:underline'>Mira Tania</a>&emsp;X&emsp;<a href="https://www.infinitelearning.id/" className='hover:underline'>Infinite Learning</a></p>
            <p className='text-[16px] text-center text-white'>&#169; 2023 </p>
        </footer>
    )
}

export default Footer
