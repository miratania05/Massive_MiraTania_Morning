import React from 'react'

const data = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1640004038577-621d95d2b6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBzdW1hdGVyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1645968580780-2bee03b2d691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtYXRlcmElMjB1dGFyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1626696445855-5f1f90db7ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN1bWF0ZXJhJTIwdXRhcmF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1586703451808-7c99c0877c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9ydGglMjBzdW1hdGVyYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1637293039272-c29a45f2655b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHN1bWF0ZXJhJTIwdXRhcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1642762428067-7ef09dee28f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHN1bWF0ZXJhJTIwdXRhcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1639572549994-ca061733ab5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHN1bWF0ZXJhJTIwdXRhcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1593279994062-0edd1b7e8c7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];



const Gallery = () => {
  return (
    <div className='max-w-[1440px] m-auto w-full px-4 py-16' id='gallery'>
      <h2 className="text-center text-5xl p-4 my-4 font-bold text-gradient ease-in-out " >Galeri</h2>
      <div className="grid sm:grid-cols-4 gap-3">
        <div className="sm:col-span-2 col-span-2 row-span-2 ">
          <img src="https://images.unsplash.com/photo-1642762205001-aada86f9dbe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bWF0ZXJhJTIwdXRhcmF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1170&q=80" />
        </div>
        {data.map((data) => {
          return (
            <div className="hover:underline" key={data.id}>
              <img src={data.image} alt="" className='hover:scale-105 ease-in rounded ' style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))' }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
