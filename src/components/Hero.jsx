import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function Hero({ user }) {
    return (
        <section id="hero" className="hero bg-radial-gradient text-white">
            <div className="container mx-auto">
                <div className="text-center py-10">
                    <img src={user?.about?.avatar?.url} alt={user?.about?.name} className="mx-auto mt-8 rounded-full w-32 h-32" />
                    <h1 className="my-5 text-4xl font-bold">Hello! I'm {user?.about?.name}</h1>
                    <p className="text-3xl text-peri-winkle mt-2 mb-10">{user?.about?.title}</p>
                    <p className="text-lg tracking-widest text-center text-peri-winkle">{user.about.subTitle}</p>
                    <div className="flex justify-center">
                        {/* if onclicking doesn't goes to contact section then try changing to anchor tag */}
                        <button id="#Contact" className="flex border-2 px-5 py-3 mt-4 border-s-peri-winkle items-center rounded-full gap-2 group">
                            Let's talk
                            <BsArrowRight color="white" height="20" width="20" className="group-hover:rotate-90 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
