import React, { useState } from 'react';

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        setOpenNavigation(!openNavigation);
    };

    const handleCloseNavigation = () => {
        setOpenNavigation(false);
    };

    return (
        <div className="fixed top-0 right-0 z-50">
            <button
                className={`${openNavigation ? 'bg-black text-white' : 'bg-[#64bbcd] text-white'} px-4 py-2 rounded-full absolute top-4 right-4`}
                onClick={toggleNavigation}
            >
                {openNavigation ? 'Close' : 'Menu'}
            </button>

            {openNavigation && (
                <nav
                    className={`${
                        openNavigation ? 'flex' : 'hidden'
                    } fixed top-14 right-0 bottom-0 bg-[#64bbcd] lg:static lg:flex lg:mx-auto lg:flex-col lg:items-center flex-col w-[240px] sm:w-1/2 md:w-1/3 lg:w-[350px]`}
                >
                    <a href="/" onClick={handleCloseNavigation} className="text-black text-4xl my-4 flex justify-center items-center">
                        Home
                    </a>
                    <a href="#about" onClick={handleCloseNavigation} className="text-black text-4xl my-4 flex justify-center items-center">
                        About
                    </a>
                    <a href="#projects" onClick={handleCloseNavigation} className="text-black text-4xl my-4 flex justify-center items-center">
                        Projects
                    </a>
                    <a href="#services" onClick={handleCloseNavigation} className="text-black text-4xl my-4  flex justify-center items-center">
                        Services
                    </a>
                    <a href="#contact" onClick={handleCloseNavigation} className="text-black text-4xl my-4  flex justify-center items-center">
                        Contact
                    </a>
                    <div className="mt-auto">
                        <div className="flex flex-row justify-between pb-2">
                            <a href="#instagram" className="bg-black text-white px-4 py-2 rounded-md mx-2">
                                Instagram
                            </a>
                            <a href="#twitter" className="bg-black text-white px-4 py-2 rounded-md mx-2">
                                Twitter
                            </a>
                        </div>
                        <div className="flex flex-row justify-between">
                            <a href="#facebook" className="bg-black text-white px-4 py-2 rounded-md mx-2">
                                Facebook
                            </a>
                            <a href="#linkedin" className="bg-black text-white px-4 py-2 rounded-md mx-2">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header;
