import Image from "next/image";
import Link from "next/link";

export default function NewProduct(){


  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
         <Link href="/" className="w-full bg-slate-100 p-4 rounded-xl flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Grey Trouser</span>
          <span className="font-semibold">$49</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear Strecthable cloth</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/" className="w-full bg-slate-100 p-4 rounded-xl flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h3.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Black Fit Trouser</span>
          <span className="font-semibold">$59</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear extra flexible</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/" className="w-full bg-slate-100 p-4 rounded-xl flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t4.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/t3.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Cotton Trouser</span>
          <span className="font-semibold">$99</span>
         </div>
         <div className="text-sm text-grey-500">Comfortable fabric, cotton jersey, easy to wear</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/" className="w-full bg-slate-100 p-4 rounded-xl flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h10.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h10.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Red Hi-Neck</span>
          <span className="font-semibold">$89</span>
         </div>
         <div className="text-sm text-grey-500">Poly-Cotton Fabric, easy to wear Extremely Warm clothes</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>

     </div>

     );
    }