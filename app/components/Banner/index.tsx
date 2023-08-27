// ./app/components/pages/banner.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Banner = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='bg-image relative overflow-hidden' id="home-section">
            <div className='arrowOne'></div>
            {/* Removed arrowTwo */}
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-8 lg:pt-20 sm:pb-12 px-6">
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        {/* Removed arrowFour */}
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                Document Storage system <br /> Digital Locker
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Store your documents digitally and securely with blockchain in Web 3 for tamper-proof authenticity.</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                             <Link href="/thiru">   <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>Get Started</button></Link>
                            </div>
                        </div>

                        <div className='col-span-5'>
                            {/* Adjusted image height */}
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1053} height={760} />
                            <div className='arrowSix'></div>
                            {/* Removed arrowEight */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
