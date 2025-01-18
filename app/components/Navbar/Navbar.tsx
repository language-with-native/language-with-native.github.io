import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { redirect } from 'next/navigation';
import Image from "next/image";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Courses', href: '/#courses', current: false },
    { name: 'Mentor', href: '/#mentor', current: false },
    { name: 'Testimonial', href: '/#testimonial', current: false },
    { name: 'Subscribe', href: '/subscribe', current: false}
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CustomLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
    return (
        <Link href={href} passHref>
            <span
                onClick={onClick}
                className="px-3 py-4 text-lg font-normal"
            >
                {children}
            </span>
        </Link>
    );
};


interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
        {
            imgSrc: '/assets/footer/whatsapp.svg',
            link: 'https://wa.me/+31616725940/?text=Thanks+for+registering!',
            width: 14
        },
        {
            imgSrc: '/assets/footer/telegram.svg',
            link: 'https://t.me/anna_speaklan',
            width: 14
        },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [currentLink, setCurrentLink] = useState('/');

    const handleLinkClick = (href: string) => {
        setCurrentLink(href);
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                {/* <h1 className='text-midnightblue text-1xl sm:text-2xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Language With Native</h1> */}
                                 <img
                                    className="block h-20 w-20"
                                    src={'/assets/logo/logo_spl.svg'}
                                    alt="dsign-logo"
                                />
                                {/*
                                <img
                                    className="hidden h-full w-full lg:block"
                                    src={'/assets/logo/logo.svg'}
                                    alt="dsign-logo"
                                /> */}
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <CustomLink
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => handleLinkClick(item.href)}
                                        >
                                            <span
                                                className={classNames(
                                                    item.href === currentLink ? 'underline-links' : 'text-slategray',
                                                    'px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100'
                                                )}
                                                aria-current={item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    ))}
                                    
                                    {socialLinks.map((items, i) => (
                                    <Link href={items.link} key={i}>
                                        <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                                            <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                        </div>
                                    </Link>
                                    ))}

                                </div>
                                <div className="flex space-x-4">

                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        {/* <Registerdialog /> */}


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>


                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
