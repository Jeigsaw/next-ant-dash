import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-1"> Welcome to our shop.</h2>
      <p>We offer wonderful shopping experience.</p>

      <section className="mt-8">
        <h3>New Arrivals (25)</h3>

      {/* Product Gallery */}
        <div className="flex flex-row flex-wrap gap-6 mt-4">

          <div className="py-4 px-6 border-[1px] border-[#eee] rounded-[4px] cursor-pointer flex flex-col items-center gap-3 hover:border-[#ccc]">
            <Image className="max-w-[10rem]" width="160" height="160" src="/favicon.ico"></Image>
            
            {/* Product Title and price */}
            <div className="text-center">
              <p>One of kind</p>
              <p className="text-[#956919]">Rs. 3000</p>
            </div>

            {/* Action Buttons */}
            <div>
              <Button type="primary" className="bg-[#cfdadb]">Buy Now</Button>
            </div>
          </div>
          
        </div>

      </section>
    </>
  )
}
