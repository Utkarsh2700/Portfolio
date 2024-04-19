import React from 'react';

function Testimonial({ user }) {
    return (
        <section className="py-20 relative bg-radial-gradient text-peri-winkle" id="testimonials">
            <h3 className="text-4xl md:text-6xl font-semibold md:px-4 px-2 pb-10 mx-auto md:pl-28">
                <span className="inline-block overflow-hidden text-white/40" style={{ opacity: 1, transform: 'none' }}>
                    What Our
                </span>{' '}
                <br />
                <span className="inline-block overflow-hidden text-[#bfbfc6]" style={{ opacity: 1, transform: 'none' }}>
                    Clients Say
                </span>
            </h3>
            <div style={{ opacity: 1 }}>
                <div
                    className="overflow-hidden w-full scroller [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
                    style={{ '--animation-direction': 'reverse', '--animation-duration': '40s' }}
                >
                    <ul className="testimonial-list flex items-center justify-center gap-4 flex-nowrap shrink-0 w-max animate-scroll hover:[animation-play-state:paused] pb-4">
                        {user.testimonials.map((testimonial, index) => (
                            <li
                                key={index}
                                className="testimonial-item md:p-6 p-4 bg-black md:w-[450px] w-[300px] rounded-2xl space-y-2 relative overflow-hidden z-0"
                                style={{ animationDelay: `${index * 2}s` }} // Stagger animation delay for each item
                            >
                                <div className="relative">
                                    <span className="text-9xl absolute -top-9 -left-2 size-10 text-[#4f4f4f]">"</span>
                                    <p className="md:line-clamp-4 line-clamp-3 opacity-90 md:text-xl">{testimonial.review}</p>
                                </div>
                                <div className="flex gap-3 pt-6">
                                    <img
                                        alt={testimonial.name}
                                        loading="lazy"
                                        width="50"
                                        height="50"
                                        decoding="async"
                                        data-nimg="1"
                                        className="object-scale-down size-10 bg-black rounded-full"
                                        style={{ color: 'transparent' }}
                                        src={testimonial.image.url}
                                    />
                                    <div>
                                        <h4 className="md:font-semibold font-medium">{testimonial.name}</h4>
                                        <h5 className="md:text-sm text-xs opacity-60">{testimonial.position}</h5>
                                    </div>
                                </div>
                                <span className="absolute -bottom-6 -z-10 -right-0 ">
                                    <svg width="80" height="176" viewBox="0 0 80 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M80 0.311005L80 75.7528L66.8466 87.9639L79.9853 100.869L79.9853 176H57.5783L57.5783 123.751L22.9432 157.376L6.80805 142.143L50.6601 99.1772L0 99.1772L0 77.0325L49.6613 77.0325L6.90351 34.3051L22.7082 18.7178L56.9467 52.1552L56.9467 0H80"
                                            fill="#34363C"
                                        ></path>
                                    </svg>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
