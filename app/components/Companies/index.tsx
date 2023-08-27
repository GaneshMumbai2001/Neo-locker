// ./app/components/pages/companies.tsx
'use client';
import React, { useState } from 'react';

const Companies = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>

            <div className="mx-auto max-w-7xl pt-2 lg:pt-8 sm:pb-0 px-6"> {/* Adjust the padding values here */}
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-2 text-white md:4px md:text-start text-center">
                                About Us
                            </h1>
                            <div className="mt-4 md:mt-6"> {/* Added padding here */}
                                <p className="text-lg text-white md:text-xl md:text-start text-center leading-relaxed pl-4">
                                    &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius mi nec mi tincidunt,
                                    vel hendrerit nibh malesuada. Duis porttitor, tellus at ultrices convallis, ligula quam venenatis est,
                                    in sollicitudin nunc tortor vitae elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;
