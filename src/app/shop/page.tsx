import Image from "next/image";
import Link from "next/link";

export default function Shop(){
  return (
    <div className="px-20">
        <div className="mt-10">
        <div className="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-black text-white font-bold px-6 py-3.5 rounded font-[sans-serif]">
      <p className="text-base">Limited Time Offer: Get 20% Off!</p>

      <div className="flex gap-2">
        <button type="button" className="bg-white text-blue-500 py-2.5 px-5 rounded text-sm hover:underline">
          Learn More
        </button>
      </div>
    </div>
        </div>
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h10.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h8.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between gap-3">
          <span className="font-medium">RED HI-NECK</span>
          <span className="font-semibold">$99</span>
         </div>
         <div className="text-sm text-grey-500">Extremely Strecthable, easy to wear, flexible, cotton fabric</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h2.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">SILVER HOODIE</span>
          <span className="font-semibold">$149</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, Fleece, Polyster- Cotton fabric </div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h3.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h4.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">LEMON-YELLOW HOODIE</span>
          <span className="font-semibold">$119</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, Fleece, Polyster- Cotton fabric</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h5.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h6.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">SKY DENIM JACKET</span>
          <span className="font-semibold">$199</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, jeans fabric, chain lock</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>

     </div>
     <br />
     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Grey Trouser</span>
          <span className="font-semibold">$49</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h3.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Black Fit Trouser</span>
          <span className="font-semibold">$59</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t4.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/t3.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Stylish Cotton Trouser</span>
          <span className="font-semibold">$99</span>
         </div>
         <div className="text-sm text-grey-500">Comfortable fabric, cotton jersey</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h10.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h10.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Red Hi-Neck</span>
          <span className="font-semibold">$89</span>
         </div>
         <div className="text-sm text-grey-500">Poly-Cotton Fabric, Extremely Warm</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>

     </div>
     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h10.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h8.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between gap-3">
          <span className="font-medium">RED HI-NECK</span>
          <span className="font-semibold">$99</span>
         </div>
         <div className="text-sm text-grey-500">Extremely Strecthable, easy to wear, flexible, cotton fabric</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h2.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">SILVER HOODIE</span>
          <span className="font-semibold">$149</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, Fleece, Polyster- Cotton fabric </div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h3.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h4.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">LEMON-YELLOW HOODIE</span>
          <span className="font-semibold">$119</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, Fleece, Polyster- Cotton fabric</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h5.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h6.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">SKY DENIM JACKET</span>
          <span className="font-semibold">$199</span>
         </div>
         <div className="text-sm text-grey-500">Extra Warm, jeans fabric, chain lock</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>

     </div>
     <br />
     <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Grey Trouser</span>
          <span className="font-semibold">$49</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t1.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h3.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Black Fit Trouser</span>
          <span className="font-semibold">$59</span>
         </div>
         <div className="text-sm text-grey-500">100% cotton fabric, easy to wear</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/t4.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/t3.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Stylish Cotton Trouser</span>
          <span className="font-semibold">$99</span>
         </div>
         <div className="text-sm text-grey-500">Comfortable fabric, cotton jersey</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>
         <Link href="/shop" className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]">
         <div className="relative w-full h-80">
         <Image src="/h10.jpg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"/>
         <Image src="/h10.jpeg" alt="" fill sizes="25vw" className="absolute object-cover rounded-md"/>
         </div>
         <div className="flex justify-between">
          <span className="font-medium">Red Hi-Neck</span>
          <span className="font-semibold">$89</span>
         </div>
         <div className="text-sm text-grey-500">Poly-Cotton Fabric, Extremely Warm</div>
         <button className="rounded-2xl ring-1 ring-red-300 text-red-500 font-semibold w-max py-2 px-4 text-xs hover:bg-blue-700 hover:text-white mt-3">Add to Cart</button>
         </Link>

     </div>
     </div>

     );
    }