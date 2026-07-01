"use client"
import React from 'react'
import Image from 'next/image';
import ProfileImg from "@/assets/profile.png"
import { AiFillStar } from 'react-icons/ai';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialItem {
    id: number;
    star_count: number;
    title: string; 
    name: string;
    post: string;
    description: string; 
    profile_image: string; 
}

const TestimonitalData: TestimonialItem[] = [
    {
        id: 1,
        star_count: 5,
        title: "Speed & Execution",
        name: "Alex Rivera",
        post: "Product Lead at Velo",
        description: "They delivered ahead of schedule without sacrificing an ounce of code quality. Pure professionals.",
        profile_image: "/profiles/alex.jpg"
    },
    {
        id: 2,
        star_count: 5,
        title: "Laser Focus",
        name: "Sarah Chen",
        post: "CTO at FinSphere",
        description: "They don't just build what you ask for; they build what your users actually need to see results.",
        profile_image: "/profiles/sarah.jpg"
    },
    {
        id: 3,
        star_count: 4,
        title: "Scalable Architecture",
        name: "Marcus Brodie",
        post: "Founder of HyperScale",
        description: "Our platform handles ten times the traffic now, and the foundation they laid remains completely unbothered.",
        profile_image: "/profiles/marcus.jpg"
    },
    {
        id: 4,
        star_count: 4,
        title: "Scalable Architecture",
        name: "Marcus Brodie",
        post: "Founder of HyperScale",
        description: "Our platform handles ten times the traffic now, and the foundation they laid remains completely unbothered.",
        profile_image: "/profiles/marcus.jpg"
    },
    {
        id: 5,
        star_count: 4,
        title: "Scalable Architecture",
        name: "Marcus Brodie",
        post: "Founder of HyperScale",
        description: "Our platform handles ten times the traffic now, and the foundation they laid remains completely unbothered.",
        profile_image: "/profiles/marcus.jpg"
    }
]

const Testimonials = () => {
    return (
        <section className='bg-(--background-secondary) w-full overflow-hidden'>
            <div className='container max-w-6xl mx-auto flex flex-col gap-12 px-6 py-10 md:py-16 lg:py-20'>
                {/* Header Content Group */}
                <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
                    <p className="inline-flex items-center gap-2 mb-4 px-4 py-2 text-md font-bold uppercase tracking-widest text-(--lemon-yellow)">
                        Client Wins
                    </p>
                    <h2 className='text-3xl font-bold leading-tight text-(--text-white) sm:text-4xl md:text-5xl'>
                        Real Results, <span className='text-(--lemon-green)'>Real Voices</span>
                    </h2>
                </div>

                {/* Swiper Slider Track */}
                <div className="max-w-6xl testimonial-slider-container pb-8">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true} // FIXED: Added infinite loop behavior
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // Mobile / Small Tablets
                            640: {
                                slidesPerView: 2,
                            },
                            // Medium Desktop View
                            768: {
                                slidesPerView: 2,
                            },
                            // Large Desktop View (lg) - Limits view to strictly 3 visible items 
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="overflow-hidden!" 
                    >
                        {TestimonitalData.map((data) => (
                            <SwiperSlide key={data.id} className="h-auto lg:hover:-translate-y-1 pt-1 ease-in-out lg:hover:delay-500">
                                <div className='flex flex-col items-start text-left gap-6 p-8 border border-gray-800 rounded-xl bg-(--background-card) shadow-md backdrop-blur-sm hover:border-(--lemon-green)/50 transition duration-300 h-full w-full'>
                                    {/* 5 Star Rating using react-icons */}
                                    <div className='flex items-center gap-1 text-(--lemon-yellow) text-xl'>
                                        {[...Array(data.star_count)].map((_, index) => (
                                            <AiFillStar key={index} />
                                        ))}
                                    </div>

                                    {/* Dynamic Description */}
                                    <p className='text-sm leading-relaxed text-gray-400 min-h-[72px]'>
                                        "{data.description}"
                                    </p>

                                    {/* Profile Info Row */}
                                    <div className='flex items-center gap-3 mt-auto w-full'>
                                        <div className="relative aspect-square w-12 overflow-hidden rounded-full border-2 border-gray-700 shrink-0">
                                            <Image
                                                src={ProfileImg}
                                                alt={`${data.name}'s profile`}
                                                fill 
                                                className='object-cover'
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <h3 className='text-md font-semibold text-(--text-white)'>
                                                {data.name}
                                            </h3>
                                            <p className='text-xs text-gray-500 font-medium'>
                                                {data.post}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Styles for pagination dots */}
            <style jsx global>{`
                .testimonial-slider-container .swiper-pagination-bullet {
                    background: #555 !important;
                    opacity: 1;
                }
                .testimonial-slider-container .swiper-pagination-bullet-active {
                    background: var(--lemon-yellow, #eab308) !important;
                }
                .testimonial-slider-container .swiper-pagination {
                    bottom: 0px !important;
                }
            `}</style>
        </section>
    )
}

export default Testimonials;