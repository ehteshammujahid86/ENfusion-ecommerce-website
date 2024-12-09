import CategogyList from "@/components/CategoryList"
import NewProduct from "@/components/NewProduct"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

export default function HomePage(){
 
  return (
    <div>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl font-semibold text-center">Featured Products</h1>
        <ProductList/>
      </div>
      
      <div className="mt-24">
      <h1 className="text-2xl py-10 font-semibold text-center px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
      <CategogyList/>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <h1 className="text-2xl font-semibold text-center">New Products</h1>
      <NewProduct/>
      </div>
    </div>
  )
}

 