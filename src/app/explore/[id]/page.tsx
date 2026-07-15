import { getSingleProduct } from "@/lib/data/data";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return (
    <section className="min-h-[calc(100vh-70px)] bg-neutral-bg py-10">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-global bg-white shadow-lg">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 p-6 lg:p-10">
            {/* Left Side */}
            <div className="flex items-center justify-center rounded-global bg-neutral-bg border border-gray-200 p-6">
              <Image
                src={product.image}
                alt={product.title}
                width={650}
                height={650}
                priority
                className="h-[350px] md:h-[500px] w-auto object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* Right Side */}
            <div className="flex flex-col">
              <span className="mb-3 w-fit rounded-full bg-secondary/10 px-4 py-1 text-sm font-semibold text-secondary">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
                {product.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-gray-600">
                {product.fullDescription}
              </p>

              <h2 className="mt-6 text-4xl font-bold text-primary">
                ৳{product.price}
              </h2>

              {/* Product Info */}
              <div className="mt-8 space-y-4 rounded-global border border-gray-200 bg-neutral-bg p-5">
                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MdCategory className="text-lg" />
                    <span>Category</span>
                  </div>

                  <span className="font-semibold text-gray-800">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaMapMarkerAlt />
                    <span>Location</span>
                  </div>

                  <span className="font-semibold text-gray-800">
                    {product.location}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaUserCircle />
                    <span>Seller</span>
                  </div>

                  <span className="font-semibold text-gray-800">
                    {product.userName}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Email</span>

                  <span className="font-medium text-primary">
                    {product.userEmail}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="flex-1 rounded-global bg-primary py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg cursor-pointer">
                  Buy Now
                </button>

                <button className="flex-1 rounded-global border-2 border-primary py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer">
                  Add to Cart
                </button>
              </div>

              {/* Security Note */}
              <div className="mt-6 rounded-global border border-accent/20 bg-accent/10 p-4">
                <p className="text-sm text-gray-700">
                  🔒 Secure shopping experience. Contact the seller directly for
                  additional product information before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}