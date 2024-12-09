import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar(){
    return(
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* for Mobile */}
            <div className="h-full flex items-center justify-between md:hidden">
            <Link href="/" className="flex items-cnter gap-3">
                    <Image src="/logo.png" alt="" width={100} height={24}/>
                </Link>
            <Menu/>
            </div>
            {/* For bigger screen */}
            <div className="hidden md:flex items-center justufy_between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <Link href="/" className="flex items-cnter gap-3">
                    <Image src="/logo.png" alt="" width={100} height={20} className="items-center"/>
                </Link>
                <div className="hidden xl:flex gap-4 font-semibold text-lg">
                <Link href="/">Homepage</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 flex items-center justify-between gap-8">
                <SearchBar/>
                <NavIcons/>
                </div>
            </div>
        </div>
    );
};