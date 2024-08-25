"use client"

import { Link } from "lucide-react"
import { useState } from "react"
import Image from "next/image";


const links = [
    {href: '/posts', label: 'Publicacoes'},
    {href: '/admin', label: 'Admin'}

]


export default function Header () {

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpean, setIsSearchOpen] = useState(false)

    const toggleNav = () => setIsNavOpen (!isNavOpen)
    const toggleSearch = () => setIsSearchOpen (!isSearchOpean)

    const toggleNavSearch = () => {
        if (isSearchOpean){
            toggleSearch()
        }
        else{
            toggleNav()
        }
    }

    return (
        <header className="bg-pink-300 sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
            <Link href='/' className="flex gap-4 items-center">
            <Image 
                src = {'public/sanrio-logo (1).svg'}
                alt = "Logo do site"
                width={904}
                height={904}
            />
            
            </Link>
            </div>

        </header>
    )
}