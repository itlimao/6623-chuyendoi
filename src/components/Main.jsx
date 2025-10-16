import { React, useState, useEffect } from 'react';

const Main = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const link = [
        'https://link.6623v3.top',
        'https://link.6623v1.top',
        'https://6623vip1.xyz',
    ]
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="min-h-screen bg-black w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-full">
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between min-h-screen">
                <div className="flex-shrink-0 mt-9 md:mt-10">
                    <img src='/assets/images/logo.png' alt="6623" className="w-50 h-auto logo-img" />
                </div>
                {isMobile ? (
                    <>
                        <div className="relative flex-grow flex items-end justify-center" style={{ marginTop: '-1rem' }}>
                            <img src='/assets/images/model.webp' alt="6623" className="relative w-full h-150 md:h-120 object-contain top-[-80px]" />
                        </div>
                        <div className="md:mb-[1rem] mt-15 md:mt-[-10px] mb-[4rem] grid grid-cols-3 gap-2 w-full mx-auto px-0">
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-205px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-3 py-0.5 text-white text-sm shadow-sm  animate-none bg-btn-link">Link 1</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-150px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-3 py-0.5 text-white text-sm shadow-sm  animate-none bg-btn-link">Link 2</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-205px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-3 py-0.5 text-white text-sm shadow-sm  animate-none bg-btn-link">Link 3</div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-center mb-2">
                            <div className="relative flex-grow flex items-center justify-center">
                                <img src='/assets/images/model.webp' alt="6623" className="w-[550px] h-auto" />
                            </div>
                        </div>
                        <div className="mb-[5rem] md:mb-[6rem] mt-15 md:mt-[-10px] mb-8 grid grid-cols-5 gap-2 w-full mx-auto md:px-100">
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-150px', transform: 'translateX(50px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-8 py-0.6 text-white bottom-[-10px] animate-float-up-down-link bg-btn-link">Link 1</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-30px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-8 py-0.6 text-white bottom-[-10px] animate-float-up-down-link bg-btn-link">Link 2</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-30px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-8 py-0.6 text-white bottom-[-10px] animate-float-up-down-link bg-btn-link">Link 3</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-30px', transform: 'translateX(0px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-8 py-0.6 text-white bottom-[-10px] animate-float-up-down-link bg-btn-link">Link 4</div>
                            </div>
                            <div className="relative flex flex-col items-center justify-end h-[220px] group cursor-pointer" style={{ marginTop: '-150px', transform: 'translateX(-50px)' }} onClick={() => window.open(link[Math.floor(Math.random() * link.length)], '_blank')}>
                                <div className="relative w-full h-full">
                                    <img src={`/assets/images/12345.png`} alt={``} className="absolute z-[2] bottom-0 top-0 transition-all duration-300 translate-y-5 drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                    <img src={`/assets/images/1234.png`} alt={``} className="absolute z-[2] scale-[0.85] top-0 bottom-1/3 animate-float-up-down drop-shadow" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'contain', color: 'transparent' }} />
                                </div>
                                <div></div>
                                <div className="absolute z-9 w-fit text-center rounded-full text-lg font-medium whitespace-nowrap transition-all duration-300 px-8 py-0.6 text-white bottom-[-10px] animate-float-up-down-link bg-btn-link">Link 5</div>
                            </div>
                        </div>
                    </>
                )
                }
            </div >
        </div >
    );
};

export default Main;
