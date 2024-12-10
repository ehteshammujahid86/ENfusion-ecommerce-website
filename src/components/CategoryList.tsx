import Image from "next/image";
import Link from "next/link";

export default function CategogyList(){
    return(
        <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/t1.jpg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">TROUSERS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/t2.jpg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">SHORTS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/h2.jpg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">BOMBER JACKETS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/h6.jpg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">T-SHIRTS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/h8.jpeg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">HOODIES</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/h5.jpg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">DENIM JACKETS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/t6.jpeg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">COTTON TROUSERS</h1>
          </Link>
          <Link
            href="/" 
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-slate-100 w-full h-96">
              <Image src="/t4.jpeg" alt="" fill />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide font-semibold">JERSEY SHORTS</h1>
          </Link>
          
      </div>
    </div>
    )
}