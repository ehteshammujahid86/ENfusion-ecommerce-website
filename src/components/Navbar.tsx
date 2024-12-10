// import Link from "next/link";
// import Menu from "./Menu";
// import Image from "next/image";
// import SearchBar from "./SearchBar";
// import NavIcons from "./NavIcons";

// export default function Navbar(){
//     return(
//         <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
//             {/* for Mobile */}
//             <div className="h-full flex items-center justify-between md:hidden">
//             <Link href="/" className="flex items-cnter gap-3">
//                     <Image src="/logo.png" alt="" width={100} height={24}/>
//                 </Link>
//             <Menu/>
//             </div>
//             {/* For bigger screen */}
//             <div className="hidden md:flex items-center justufy_between gap-8 h-full">
//                 {/* LEFT */}
//                 <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
//                 <Link href="/" className="flex items-cnter gap-3">
//                     <Image src="/logo.png" alt="" width={100} height={20} className="items-center"/>
//                 </Link>
//                 <div className="hidden xl:flex gap-4 font-semibold text-lg">
//                 <Link href="/">Homepage</Link>
//                 <Link href="/shop">Shop</Link>
//                 <Link href="/about">About</Link>
//                 <Link href="/contact">Contact</Link>
//                 </div>
//                 </div>
//                 {/* RIGHT */}
//                 <div className="w-2/3 flex items-center justify-between gap-8">
//                 <SearchBar/>
//                 <NavIcons/>
//                 </div>
//             </div>
//         </div>
//     );
// };

import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
            {/* Mobile Navbar (Screens below 768px) */}
            <div className="flex items-center justify-between h-full sm:hidden">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={120} height={100} />
                </Link>
                {/* Hamburger Menu for Small Screens */}
                <div className="ml-auto"> {/* Align to the right */}
                    <Menu />
                </div>
            </div>

            {/* Navbar for Screens Between 768px and 1279px (Tablet to Small Laptop) */}
            <div className="hidden sm:flex xl:hidden items-center justify-between gap-8 h-full">
                <div className="w-full flex items-center justify-between">
                    {/* Logo */}
                    
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Logo" width={120} height={40} />
                    </Link>
                    {/* Hamburger Menu for Tablets and Small Laptops */}
                   
                    {/* Cart, Login, and Search Bar for Screens Between 768px - 1279px */}
                    <div className="flex items-center gap-4">
                        <NavIcons />
                        <SearchBar />
                        <div className="ml-auto"> {/* Align to the right */}
                        <Menu />
                    </div>
                    </div>
                </div>
            </div>

            {/* Full Menu for Screens Above 1280px (Larger Screens) */}
            <div className="hidden xl:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-2/3 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="Logo" width={120} height={20} />
                    </Link>
                    <div className="flex gap-4 font-semibold text-lg">
                        <Link href="/">Homepage</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-2/3 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    );
}

