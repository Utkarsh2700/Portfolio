import React from 'react';

function Timeline({ user }) {
    return (
        <section id="timeline">
            <div className="relative pb-20 bg-radial-gradient">
                <span className="blob absolute top-[20%] left-0 w-1/3 h-5/6 blur-[100px] -z-10"></span>
                <h3 className="text-4xl md:text-6xl font-semibold px-2 mx-auto pl-4 md:px-12 py-20">
                    <span className="inline-block overflow-hidden text-white/40 opacity-100 transform-none">Experience</span>
                    <br />
                    <span className="inline-block overflow-hidden opacity-100 transform-none">History</span>
                </h3>

                <div className="h-[55rem] text-peri-winkle">
                    {user.timeline.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 md:py-8 border-b border-white/10 px-2 md:px-12 relative overflow-hidden transition duration-300 ease-in-out hover:h-[300px]"
                        >
                            <div className="flex items-center justify-between md:gap-8">
                                <span className="max-md:hidden">0{index + 1}</span>
                                <div className="md:text-5xl text-xl md:font-semibold flex-1">
                                    <div className="relative overflow-hidden whitespace-pre">
                                        <div className="py-2 text-peri-winkle" style={{ transform: 'none' }}>
                                            {item.jobTitle}
                                        </div>
                                        <div className="absolute left-0 top-0 py-2" style={{ transform: 'translateY(100%) translateZ(0px)' }}>
                                            {item.jobTitle}
                                        </div>
                                    </div>
                                </div>
                                <div className="max-md:text-sm max-md:flex flex-col text-foreground/50">
                                    <span className="italic">{new Date(item.startDate).toLocaleDateString()}</span>
                                    <span className="max-md:hidden"> - </span>
                                    <span className="italic">{new Date(item.endDate).toLocaleDateString()}</span>
                                </div>
                            </div>
                            <div className="md:pl-12 py-2 text-foreground/50 max-md:text-sm flex items-center justify-between absolute inset-x-0 bottom-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                                <span>{item.company_name}</span>
                                <span>{item.jobLocation}</span>
                            </div>
                            <div className="overflow-hidden absolute inset-x-0 bottom-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out pt-4 pb-2 px-4">
                                <p className="text-foreground/60">{item.summary}</p>
                                <ul className="list-disc list-inside">
                                    {item.bulletPoints.map((point, idx) => (
                                        <li key={idx} className="text-foreground/80 max-md:text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
