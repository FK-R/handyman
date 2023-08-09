'use client'
import Link from "next/link";
const Banner = () => {
    return (
        <div>
            <div
                className="relative overflow-hidden bg-no-repeat bg-cover w-full"
                style={{
                    backgroundPosition: "50%",
                    backgroundImage:
                        'url("../images/banner.jpg")',
                    height: 300
                }}
                
            />
            <div className="lg:w-5/6 mx-auto px-6 md:px-12 xl:px-32">
                <div className="text-center text-gray-800">
                    <div
                        className="block rounded-lg shadow-lg p-6 lg:py-16 lg:px-12"
                        style={{
                            marginTop: "-170px",
                            // background: "hsla(0, 0%, 100%, 0.7)",
                            background: "hsla(0, 0%, 100%, 1)",
                            backgroundColor:'#F5F6F7',
                        
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        <h1 className="text-2xl lg:text-5xl font-bold tracking-tight mb-6 lg:mb-12 ">
                            Best Handyman Service in <br />
                            <span className="singapore">Singapore</span>
                        </h1>
                       <div className='flex gap-3 lg:gap-6 justify-center items-center'> 
                       <Link href='/service' className='btn bg-white text-gray-800 hover:text-white normal-case text-lg rounded-md'>Get Started</Link>
                        <Link href='/about' className='btn btn-gray-800 hover:bg-gray-700 normal-case text-lg rounded-md text-white'>Learn more</Link>
                       </div>
                    </div>
                </div>
            </div>
          
        </div>

    );
};

export default Banner;