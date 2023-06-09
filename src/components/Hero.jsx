import React from 'react';

const Hero = () => {
    return (
        <div className='relative'>
            <img src="https://r4.wallpaperflare.com/wallpaper/138/331/679/samosir-view-of-lake-toba-wallpaper-09af740882c71ea54990ca6e3f5b6120.jpg" alt="sea"
                className='w-full h-[90vh] object-cover'
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            />
            <div className="max-w-[1140px] m-auto">
                <div className="absolute top-[17%] w-full md:-[50%] max-w-[900px] h-full flex-col text-[#fff] p-6"
                    style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                    <h1 className='font-bold text-6xl'>Temukan Perjalanan Istimewa Anda</h1>
                    <h2 className="font-semi-bold text-3xl py-6 italic">Bersama Jelajah Sumut</h2>
                    <p className='text-[23px]'>
                        Menjelajah keindahan alam serta menerobos medan yang menantang dan menyenangkan. Jangan lupakan juga untuk menemukan warisan sejarah yang tersimpan rapi dan bersua dengan penduduk yang ramah dan sederhana. Selama perjalanan ini, bawalah pulang kenangan abadi dalam diri Anda. Selamat menikmati perjalanan tak terlupakan Anda bersama Jelajah Sumut!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero;
