"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'As a native speaker of both Russian and Ukrainian, I am passionate about helping my students achieve fluency and confidence in these beautiful languages. My lessons focus on conversational practice, ensuring you not only learn the language but also feel comfortable using it in real-life situations. My goal is to help you break through language barriers and speak Russian or Ukrainian freely and naturally. Every session is tailored to your individual needs and interests, making your learning experience engaging, effective, and personal. With a flexible and student-centered approach, I’m here to guide you on your journey to mastering Russian or Ukrainian. Together, we’ll make your language goals a reality!',
        name: 'Anna Pavlenko',
        imgSrc: '/assets/mentor/anna.png',
    },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/anna.jpg',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user1.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user3.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user2.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user1.png',
    // },
]


interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/whatsapp.svg',
        link: 'https://wa.me/+380/?text=Thanks+for+registering!',
        width: 14
    },
    {
        imgSrc: '/assets/footer/telegram.svg',
        link: 'https://t.me/annetik_p',
        width: 14
    },

]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                // {
                //     breakpoint: 1200,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 1,
                //         infinite: true,
                //         dots: false
                //     }
                // },
                // {
                //     breakpoint: 1000,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1,
                //         infinite: true,
                //         dots: false
                //     }
                // },
                // {
                //     breakpoint: 530,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1,
                //         infinite: true,
                //         dots: false
                //     }
                // }
            ]
        };


        return (
            <div className="py-10 sm:py-24 bg-paleblue" id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet with your mentor</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={306} height={0} max-width={306} max-height={100}className="inline-block m-auto" />
                                        {/* <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div> */}
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                    
                                        <h3 className='text-lg font-semibold text-gunmetalgray pt-5 lh-160 mt-5 mb-4 lg:mb-16'>Contact Anna to book a trial lesson

                                            
                                        </h3>

                         
                                            <div className='flex gap-4 center-element'>

                                                {socialLinks.map((items, i) => (
                                                <Link href={items.link} key={i}>
                                                    <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                                        <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                                    </div>
                                                </Link>
                                                ))}

                                            </div>

                                   


                                    </div>
                                    {/* <div>
                                        <h4>As a native speaker of both Russian and Ukrainian, I am passionate about helping my students achieve fluency and confidence in these beautiful languages. My lessons focus on conversational practice, ensuring you not only learn the language but also feel comfortable using it in real-life situations.

My goal is to help you break through language barriers and speak Russian or Ukrainian freely and naturally. Every session is tailored to your individual needs and interests, making your learning experience engaging, effective, and personal.

With a flexible and student-centered approach, I’m here to guide you on your journey to mastering Russian or Ukrainian. Together, we’ll make your language goals a reality!</h4>
                                    </div> */}



                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
