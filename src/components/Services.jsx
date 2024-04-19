import React from 'react';

function Services({ user }) {
    return (
        <section className="px-2 py-20 relative bg-radial-gradient2 text-peri-winkle" id="services">
            {/* Your section content */}
            <h3 className="text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto md:pl-16 overflow-hidden">
                <span className="inline-block overflow-hidden text-white/40" style={{ opacity: 1, transform: 'none' }}>
                    Here's how
                </span>
                <br />
                <span className="inline-block overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
                    I can help you
                </span>
            </h3>
            <div className="mx-auto pt-10">
                {user.services.map((service, index) => (
                    <a
                        key={index}
                        href={service.link}
                        className="group relative flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-500 md:py-6 md:px-16 hover:bg-white/5"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <h4 className="relative z-10 block text-2xl sm:text-4xl font-semibold md:font-bold md:text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl">
                                    {service.name}
                                </h4>
                                <span className="md:text-2xl text-foreground/50 md:hidden">{service.charge}</span>
                            </div>
                            <p className="relative z-10 mt-2 block md:text-base text-sm text-foreground/50 transition-colors duration-500 group-hover:text-neutral-50">
                                {service.desc}
                            </p>
                        </div>
                        <img
                            src={service.image.url}
                            className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 max-md:hidden"
                            alt={`Image representing a link for ${service.name}`}
                            style={{
                                top: '41.1702%',
                                left: '67.5%',
                                transform: 'translateX(-50%) translateY(-50%) scale(0) rotate(-12.5deg) translateZ(0px)',
                            }}
                        />
                        <div
                            className="z-10 md:p-4 grid justify-items-end gap-2 max-md:hidden"
                            style={{ opacity: 0, transform: 'translateX(25%) translateZ(0px)' }}
                        >
                            <span className="md:text-2xl text-neutral-50 pr-1">${service.charge}</span>
                            {service.discount && (
                                <div className="border border-white/50 rounded-full py-2 px-4 text-white">
                                    <div className="relative overflow-hidden whitespace-pre">
                                        <div className="overflow-hidden">
                                            {service.discount.split('').map((char, idx) => (
                                                <span key={idx} className="inline-block whitespace-" style={{ transform: 'none' }}>
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="absolute left-0 top-0">
                                            {service.discount.split('').map((char, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-block whitespace-"
                                                    style={{ transform: 'translateY(100%) translateZ(0)' }}
                                                >
                                                    {char}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </a>
                ))}
            </div>
            <div className="flex items-center py-10 md:hidden opacity-1">
                <div className="p-4 rounded-full border border-white/50 ">
                    <span className=" text-white">Discuss the project</span>
                </div>
            </div>
        </section>
    );
}

export default Services;
