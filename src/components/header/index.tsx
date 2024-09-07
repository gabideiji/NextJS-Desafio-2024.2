'use client';
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Search from "../search";

const links = [
    { href: '/login', label: 'Login' },
    { href: '/faleconosco', label: 'Fale Conosco' },
    { href: '/produtos', label: 'Produtos' },
    { href: '/gerenciar', label: 'Gerenciar' },
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
        <header style={{ backgroundColor: '#FF9E9E' }} className="top-0 z-20 mx-auto w-full py-4 px-4 md:p-6 mb-6 border-b border-pink-300">
            <div className="flex items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex items-center">
                    <Image
                        src='/logo/sanrio.svg'
                        alt="Logo do site"
                        width={904}
                        height={904}
                        className="h-16 w-16 rounded-xl"
                    />
                </Link>
                <nav className='flex justify-end'>
                    <div className='hidden md:flex gap-8 items-center'>
                        <SearchIcon
                            onClick={toggleSearch}
                            className="w-6 h-6 text-white cursor-pointer hover:text-gray-200 transition-all"
                        />
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} className="text-white text-lg hover:text-gray-200">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        {isNavOpen || isSearchOpen ? (
                            <X onClick={toggleNavSearch} className="w-8 h-8 text-white cursor-pointer" />
                        ) : (
                            <div className="flex gap-4">
                                <SearchIcon onClick={toggleSearch} className="w-8 h-8 text-white cursor-pointer" />
                                <Menu onClick={toggleNav} className="w-8 h-8 text-white cursor-pointer" />
                            </div>
                        )}
                    </div>
                </nav>

                {isSearchOpen && (
                    <div className="absolute top-20 left-0 w-full bg-[#FF9E9E] z-30 p-2">
                        <div className="flex justify-center items-center">
                            <Search />
                            <button onClick={toggleSearch} className="ml-2 text-white px-4 py-1">
                                X
                            </button>
                        </div>
                    </div>
                )}

                {isNavOpen && (
                    <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-[#FF9E9E] z-20">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index} className="text-white text-lg p-2">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
