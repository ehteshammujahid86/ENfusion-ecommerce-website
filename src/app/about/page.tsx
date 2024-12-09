import Image from "next/image"
import Link from "next/link"
export default function About(){
    return(
        <div className="">
            <div className="font-sans bg-gray-100 px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">About Us</h2>
          <p className="mb-4 text-sm text-gray-500">Welcome to ENfusion store, your one-stop shop for the finest products. We are dedicated to providing you with the highest quality items and an exceptional shopping experience.</p>
          <p className="mb-4 text-sm text-gray-500">Founded in 2020, our mission is to offer a wide range of carefully curated products to meet your needs. Whether you are shopping for fashion, electronics, home decor, or more, we have got you covered.</p>
          <p className="text-sm text-gray-500">We aim to make online shopping simple, convenient, and enjoyable. With a focus on customer satisfaction and top-tier quality, we ensure that every product you purchase from us exceeds your expectations.</p>
          <p className="text-sm text-gray-500"><h1>Our Values:</h1>
1. Quality Products: We carefully select products to meet high standards. <br />
2. Fast Shipping: Enjoy prompt and reliable delivery on every order. <br />
3. Sustainable Practices: We strive to support sustainable sourcing and eco-friendly initiatives.</p>
        </div>
        <div>
          <Image src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
        </div>
      </div>
    </div>
    <div className="bg-gray-50 p-8 min-h-[350px] flex flex-col items-center justify-center font-sans">
      <h2 className="text-gray-800 text-3xl font-bold mb-16 text-center">Application Metrics</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12">
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-extrabold">5.4<span className="text-blue-600">M+</span></h3>
          <p className="text-base font-bold mt-4">Total Buyers</p>
          <p className="text-sm text-gray-500 mt-2">The total number of buyers on the platform.</p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-extrabold">$80<span className="text-blue-600">K</span></h3>
          <p className="text-base font-bold mt-4">Revenue</p>
          <p className="text-sm text-gray-500 mt-2">The total revenue generated by the Store.</p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-extrabold">100<span className="text-blue-600">K</span></h3>
          <p className="text-base font-bold mt-4">Engagement</p>
          <p className="text-sm text-gray-500 mt-2">The level of buyers engagement with the websites content and features.</p>
        </div>
        <div className="text-center">
          <h3 className="text-gray-800 text-4xl font-extrabold">99.9<span className="text-blue-600">%</span></h3>
          <p className="text-base font-bold mt-4">Service uptime</p>
          <p className="text-sm text-gray-500 mt-2">The percentage of time the service has been available.</p>
        </div>
      </div>
    </div>
        </div>
    )
}