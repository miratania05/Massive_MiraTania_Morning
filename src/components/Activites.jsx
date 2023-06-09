import React from 'react';

const data = [
  {
    id: 1,
    title: 'Alam',
    img: 'https://parboaboa.co/data/foto_berita/wisata-sumut.webp',
  },
  {
    id: 2,
    title: 'Budaya',
    img: 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/01/02201551/Rumah-Adat-Sumatera-Utara-2.jpg',
  },
  {
    id: 3,
    title: 'Kuliner',
    img: 'https://asset.kompas.com/crops/acnQiWh0heoEQMMjoSzLIvoi1n0=/0x20:1000x687/750x500/data/photo/2020/07/15/5f0ed5805b629.jpg'
  },
  {
    id: 4,
    title: 'Sejarah',
    img: 'https://asset.kompas.com/crops/dcWKLmnMWa_nqXpvu2dT0wZKjGE=/0x0:860x573/780x390/data/photo/2023/05/08/645921bcd3d45.jpg',
  },
];

const Activites = () => {
  return (
    <div className='max-w-[1440px] m-auto w-full md:flex mt-[35px] w-[1300px]'>
      {data.map((data) => {
        return (
          <div className="relative p-4" key={data.id}>
            <h3
              className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[2.25rem] font-bold'
              style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 1, 0, 1))' }}
            >
              {data.title}
            </h3>
            <a href="/" className='block w-full h-full'>
              <img
                src={data.img}
                className='object-cover hover:translate-y-[-0.25rem] ease-linear w-[1170px] h-[200px] ease-in rounded border-4'
                style={{
                  filter: 'drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))',
                  borderImage: 'linear-gradient(to right, #02426E 0%, #02426E 33%, #02D8F2 66%, #02D8F2 100%)',
                  borderImageSlice: 1
                }}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Activites;
