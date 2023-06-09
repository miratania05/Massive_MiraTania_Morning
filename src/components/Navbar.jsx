import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className='w-full min-h-[70px] flex justify-between items-center z-10 text-white bg-gradient'
      style={{
        position: 'relative',
        zIndex: '10',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)',
      }}
    >
      <ul className='hidden sm:flex px-6'>
        <li>
          <a href='/'>
            <label>Beranda</label>
          </a>
        </li>
        <li>
          <a href='#deals'>
            <label>Transaksi</label>
          </a>
        </li>
        <li>
          <a href='#gallery'>
            <label>Galeri</label>
          </a>
        </li>
        <li>
          <a href='#contact'>
            <label>Kontak</label>
          </a>
        </li>
      </ul>
      <div className='flex justify-between px-6'>
      <a href="https://www.facebook.com/mira.tania.735507">
        <FaFacebookF className='mx-3 text-[20px] hover:cursor-pointer hover:scale-125 ' />
        </a>
        <a href="https://www.instagram.com/ainatarim/">
        <FaInstagram className='mx-3 text-[20px] hover:cursor-pointer hover:scale-125  ' />
        </a>
        <a href= "https://twitter.com/ainatarim">
        <FaTwitter className='mx-3 text-[20px] hover:cursor-pointer hover:scale-125 ' />
        </a>
      </div>

      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer' />
      </div>

      {/* Mobile menu */}

      <div
        className={
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className='h-full w-full text-center pt-12'>
          <li className='text-2xl py-8'>
            <a href='/'>Beranda</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#gallery'>Galeri</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#deals'>Transaksi</a>
          </li>
          <li className='text-2xl py-8'>
            <a href='#contact'>Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
