import Image from "next/image";
import { Button } from "antd";
import { FiEdit3 } from "react-icons/fi";

// get products data form fake store api
async function getData () {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
  return res.json();
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-3"> Welcome to our shop.</h2>
      <p>We offer wonderful shopping experience.</p>

      <section className="mt-8 pb-8">
        {products.length > 0 ?
        <>
         <h3>New Arrivals ({products.length})</h3>

          {/* Product Gallery */}
          <div className="flex flex-row flex-wrap gap-6 mt-4">
  
            {products.map((product) => 
              <div key={product.id} className="group overflow-hidden relative py-4 px-6 border-[1px] border-[#eee] rounded-[4px] cursor-pointer flex flex-col items-center gap-3 hover:border-[#ccc]">
  
                <Image className="max-w-[10rem]" priority={true} width="160" height="160" src={product.images[0]} alt={`Product image of ${product.title}`}></Image>
                
                {/* Product Title and price */}
                <div className="text-center">
                  <h4>{product.title}</h4>
                  <p className="text-[#956919]">Rs. {product.price}</p>
                </div>
  
                {/* Buy Now Action Buttons */}
                <div>
                  <Button type="primary" className="bg-primary-btn">Buy Now</Button>
                </div>
  
                {/* Admin Action button */}
                <div className="absolute right-1 top-[-100px] group-hover:translate-y-[105px] group-hover:transition-transform">
                  <button className="rounded-full flex flex-row gap-2 justify-center text-sm bg-[#e4e8e9e8] py-2 px-3 text-slate-700 border-[#aabdbf] border-[1px]">
                    <FiEdit3 />
                    <span className="leading-[1]">Edit</span>
                  </button>
                </div>
  
              </div>
            )}
            
            
          </div>
        </>
        :
        <p>We currently do not have any products. Please check back later.</p>
        }
        

      </section>
    </>
  )
}
