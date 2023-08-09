'use client'
import hr1 from '../images/home_renovation_1.jpg';
import hr2 from '../images/home_renovation_2.jpg';
import hr3 from '../images/home_renovation_3.jpg';
import hr4 from '../images/home_renovation_4.jpg';
import hr5 from '../images/home_renovation_5.jpg';
import hr6 from '../images/home_renovation_6.jpg';

const Gallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr1}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr2}
                        />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr3}
                        />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr4}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr5}
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center shadow-xl"
                            src={hr6}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;