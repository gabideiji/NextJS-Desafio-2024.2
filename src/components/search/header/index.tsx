'use client'
import {X} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useState} from "react"
import { Search as SearchIcon } from "lucide-react";


const links = [
    {href: '/posts', label: 'Publicacoes'},
    {href: '/admin', label: 'Admin'}
];

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); 

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen); 

    const toggleNavSearch = () => {
        if (isSearchOpen) { 
            toggleSearch();
        } else {
            toggleNav();
        }
    };

    return (
        <header style={{ backgroundColor: '#FF9E9E' }} className="top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image 
                        src='/logo/logo.svg'
                        alt="Logo do site"
                        width={904}
                        height={904}
                        className="h-20 w-20 rounded-xl"
                    />
                    <span className='text-white hidden md:block text-3xm font-semibold'> |</span>
                    <span className='text-white hidden md:block text-3xm font-semibold'>Kitty Shop </span>
                </Link>
                <nav className='flex justify-end'>
                    <div className='hidden w-full md:flex justify-end items-center gap-16'>
                      
                    </div>

                </nav>
            </div>
        </header>
    );
}
