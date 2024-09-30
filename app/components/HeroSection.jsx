import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className="col-span-7 place-self-center p-4">
                    <h1 className='text-white mb-4 text-4xl lg:text-4xl font-extrabold'>
                        Hello, <br /> This is <span className='text-pink-500'>Sai Sandeep R</span>, <br /> I'm a Professional <br /> <span className="text-[#16f2b3]">Software Developer</span>
                    </h1>
                </div>
                <div className="col-span-5">
                    
                </div>
            </div>

        </section>
    )
}

export default HeroSection