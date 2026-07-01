import React from 'react'

// 1. Define the TypeScript interface for the card data
interface PillarItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

// 2. Create the dynamic data array
const PILLARS_DATA: PillarItem[] = [
    {
        id: 1,
        icon: '🎯',
        title: 'Precision Targeting',
        description: 'We use audience intelligence and search behavior data to put your brand in front of people who are already looking for what you offer.'
    },
    {
        id: 2,
        icon: '⚡',
        title: 'Revenue-First Strategy',
        description: 'Every campaign, post, and page is reverse-engineered from your revenue goals. We connect marketing activity directly to conversions.'
    },
    {
        id: 3,
        icon: '📈',
        title: 'Systems That Scale',
        description: 'We build marketing infrastructure — not one-off campaigns. Content systems and SEO foundations that generate leads around the clock.'
    }
];

const About = () => {
    return (
        <section className='bg-(--background-secondary) w-full'>
            <div className='container max-w-6xl mx-auto flex flex-col gap-12 px-6 py-10 md:py-16 lg:py-20'>
                {/* Header Content Group */}
                <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
                    <p className="inline-flex items-center gap-2 mb-4 px-4 py-2  text-md font-bold uppercase tracking-widest text-(--lemon-yellow)">
                        {/* <span className="w-2 h-2 rounded-full bg-(--lemon-yellow)"></span> */}
                        Why LemonTech
                    </p>
                    <h2 className='text-3xl font-bold leading-tight text-(--text-white) sm:text-4xl md:text-5xl'>
                        Three Pillars That Actually <span className='text-(--lemon-green)'>Move</span> The Needle
                    </h2>
                </div>

                {/* Responsive Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {/* 3. Map over the dynamic array */}
                    {PILLARS_DATA.map((pillar) => (
                        <div
                            key={pillar.id}
                            className='flex flex-col items-center text-center gap-4 p-8 border border-gray-800 rounded-xl bg-(--background-card) shadow-md backdrop-blur-sm hover:border-(--lemon-green)/50 transition duration-300'
                        >
                            {/* Dynamic Icon */}
                            <div className='w-12 h-12 rounded-lg bg-(--lemon-green)/10 flex items-center justify-center text-(--lemon-green) text-xl font-bold'>
                                {pillar.icon}
                            </div>

                            {/* Dynamic Title */}
                            <h3 className='text-xl font-semibold text-(--text-white)'>
                                {pillar.title}
                            </h3>

                            {/* Dynamic Description */}
                            <p className='text-sm leading-relaxed text-gray-400'>
                                {pillar.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>


        </section>
    )
}

export default About