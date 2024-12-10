"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <div className="">
            {/* Menu icon */}
            <Image 
                src="/menu.png" 
                alt="menu" 
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={() => setOpen((prev) => !prev)} 
            />

            {/* Menu items */}
            {open && (
                <div className="absolute z-20 bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl ">
                    <Link href="/" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">Homepage</Link>
                    <Link href="/shop" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">Shop</Link>
                    <Link href="/about" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">About</Link>
                    <Link href="/contact" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">Contact</Link>
                    <Link href="/" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">Logout</Link>
                    <Link href="/" onClick={closeMenu} className="hover:bg-blue-800 w-full text-center">Cart</Link>
                </div>
            )}
        </div>
    );
}

