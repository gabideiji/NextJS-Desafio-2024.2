'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

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
        <header style={{ backgroundColor: '#FF9E9E' }} className="top-0 z-20 mx-auto w-full py-6 px-6 md:p-8 mb-8 border-b border-pink-300">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image
                        src='/logo/sanrio.svg'
                        alt="Logo do site"
                        width={904}
                        height={904}
                        className="h-24 w-24 rounded-xl"
                    />
                </Link>
                <nav className='flex justify-end'>
                    <div className='hidden w-full md:flex justify-end items-center gap-16'>
                        {isSearchOpen ?
                            <X
                                onClick={toggleSearch}
                                className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <SearchIcon
                                onClick={toggleSearch}
                                className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                        }
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                    
                    <div className="md:hidden">
                        {isNavOpen || isSearchOpen ?
                            <X
                                onClick={toggleNavSearch}
                                className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <div className="flex gap-4">
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-10 h-10 text-white cursor-pointer"
                                />
                                <Menu
                                    onClick={toggleNav}
                                    className="w-12 h-12 text-white cursor-pointer"
                                />
                            </div>
                        }
                    </div>
                </nav>
                
                {isSearchOpen && (
                    <div className="flex items-center justify-center bg-[#FF9E9E] z-30">
                        <div className="flex items-center bg-white p-4 rounded-lg">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="p-2 rounded-l-lg border border-gray-300"
                            />
                            <button
                                onClick={toggleSearch}
                                className="bg-[#FF9E9E] text-white px-4 py-2 rounded-r-lg"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}

                {isNavOpen && (
                    <div className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-[#FF9E9E] z-20">
                        {links.map((link, index) =>
                            <Link href={link.href} key={index} className="text-2xl text-white hover:bg-white/20 p-3 rounded-xl">
                                {link.label}
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}
