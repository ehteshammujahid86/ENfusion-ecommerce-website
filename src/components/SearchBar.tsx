"use client"

import Image from "next/image"

export default function SearchBar(){
    return(
<form action="" className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1">
        <input type="text" placeholder="Search" className="flex-1 bg-transparent out " />
        <button className="cursor-pointer">
            <Image src="/search.png" alt="" width={16} height={16}/>

        </button>
</form>    
)
}
