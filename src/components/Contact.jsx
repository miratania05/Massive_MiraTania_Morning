import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1440px] px-4 m-auto w-full py-16'>
      <h2 className='text-center text-gradient text-[2.5rem] py-4'>Kirimkan pesan Anda</h2>
      <p className="text-center text-black py-0 text-[25px]">Kami siap membantu!</p>
      <br />
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="image-wrapper">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/94/1021/desktop-wallpaper-istana-maimun-istana.jpg"
              alt=""
              className='object-cover ease-in rounded'
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/474/680/desktop-wallpaper-file-danau-toba-png-lake-toba-thumbnail.jpg"
              alt=""
              className='object-cover ease-in rounded'
            />
          </div>
          <div className="image-wrapper">
            <img
              src="https://e0.pxfuel.com/wallpapers/728/937/desktop-wallpaper-sumatra-loop-bukit-lawang-berastagi-lake-toba-siantar-bukit-lawang-diary-of-my-golden-year.jpg"
              alt=""
              className='object-cover ease-in rounded'
            />
          </div>
          <div className="image-wrapper">
            <img
              src="http://disbudpar.sumutprov.go.id/wp-content/uploads/2019/12/10-10-2016-5-33-27_49760_sipisopiso.jpg"
              alt=""
              className='object-cover ease-in rounded'
            />
          </div>
        </div>
        <form className="grid grid-cols-2 gap-4 text-[20px]">
          <input type="text" placeholder='Nama Depan' className='border p-2' />
          <input type="text" placeholder='Nama Belakang' className='border p-2' />
          <input type="email" placeholder='Email' className='border p-2' />
          <input type="tel" placeholder='Nomor HP' className='border p-2' />
          <input type="text" placeholder='Alamat' className='border col-span-2 p-2' />
          <textarea cols="30" rows="10" placeholder='Ketik pesan Anda...' className='border col-span-2 p-2'></textarea>
          <button style={{ width: 'fit-content' }}>Kirim</button>
        </form>
      </div>
      <style jsx>{`
        .image-wrapper {
          width: 100%;
          height: 250px;
        }
        .image-wrapper img {
          width: 100%;
          height: 120%;
        }
      `}</style>
    </div>
  );
};

export default Contact;
