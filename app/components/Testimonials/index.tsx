"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Douny",
        profession: 'Developer',
        comment: 'Perfect for Beginners. I started as a complete beginner, and this course has been exactly what I needed. The teacher is patient and explains everything clearly. I love how practical the lessons are – I’m already having basic conversations',
        imgSrc: '/assets/testimonial/user.svg',
    },
    {
        name: "Zara Swatchovski",
        profession: 'Dog sitter',
        comment: 'An Immersive Experience. Learning Ukrainian with a native speaker has been an incredible experience. The lessons are interactive and culturally rich, which makes each session not only educational but also enjoyable. I feel much more confident speaking and understanding Ukrainian now.',
        imgSrc: '/assets/mentor/user2.png',
    },
    {
        name: "Josse Figman",
        profession: 'Manager',
        comment: 'A Fantastic Speaking Experience. The Russian Speaking Club has been an amazing way to improve my conversational skills. The small group setting made it easy to participate, and the native-speaking mentor provided helpful corrections and tips without making it feel intimidating. Each session focused on interesting topics, which kept the discussions lively and engaging.',
        imgSrc: '/assets/mentor/user3.png',
    }
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
                                    <div className="absolute top-[-45px]">
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} className="inline-block" />
                                    </div>
                                    <h4 className='text-base font-normal text-darkgray my-4'>{items.comment}</h4>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                            <StarIcon width={20} className="text-gold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
