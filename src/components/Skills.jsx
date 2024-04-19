import React from 'react';

function Skills({ user }) {
    return (
        <section id="skills" className="bg-black text-pastel-brown">
            <div className="container">
                <h2 className="heading-skills trigger-skills px-4">
                    <span className="word text-4xl font-normal pr-2">What</span>
                    <span className="word text-4xl font-normal pr-2">I'm</span>
                    <span className="word text-4xl font-normal pr-2">Good</span>
                    <span className="word text-4xl font-normal pr-2">At</span>
                </h2>
                <div className="grid gap-10 mt-10 md:grid-cols-3">
                    {user.skills.map((skill, index) => (
                        <div key={index} className="skill-card bg-peri-winkle mx-4 rounded-2xl">
                            <div className="p-6 rounded-2xl bg-card-dark group">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-around">
                                        <h4 className="font-medium">{skill.name}</h4>
                                        <div className="p-4 rounded-full size-16 bg-orange-400">
                                            <img alt={skill.name} loading="lazy" width="1024" height="1024" decoding="async" src={skill.image.url} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-full rounded-full bg-[#c94a6a]">
                                            <div className="h-2 rounded-full bg-slate-500" style={{ width: `${skill.percentage}%` }}></div>
                                        </div>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
