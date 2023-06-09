import React from 'react'

const Booking = () => {
    return (
        <div id="deals" className='max-w-[1440px] m-auto w-full p-4 '>
            <form className='lg:flex lg:justify-between w-full items-center'>
                <div className="flex flex-col my-2 py-2">
                    <label className="">Destinasi</label>
                    <select className='lg:w-[300px] md:w-full border rounded-md p-2 text-[20px]' style={{ borderImage: 'linear-gradient(to right, #02426E, #02D8F2)', borderImageSlice: '1'}}>
                        <option value="">Air Terjun Sipiso-piso</option>
                        <option value="">Bukit Gundaling</option>
                        <option value="">Bukit Holbung</option>
                        <option value="">Bukit Lawang</option>
                        <option value="">Danau Toba</option>
                        <option value="">Elephant Champ</option>
                        <option value="">Gunung Sibayak</option>
                        <option value="">Istana Maimun</option>
                    </select>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label >Masuk</label>
                        <input className='border rounded-md p-2 text-[20px]' type="date" style={{ borderImage: 'linear-gradient(to right, #02426E, #02D8F2)', borderImageSlice: '1'}}/>
                    </div>
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label >Keluar</label>
                        <input className='border p-2 text-[20px]' type="date" style={{ borderImage: 'linear-gradient(to right, #02426E, #02D8F2)', borderImageSlice: '1'}} />
                    </div>
                </div>
                <div className="flex flex-col my-2 p-2 w-full ">
                    <label className='text-center'>Cari</label>
                    <button className='w-full text-[20px]'>Harga & Ketersediaan</button>
                </div>
            </form>
        </div>
    )
}

export default Booking
