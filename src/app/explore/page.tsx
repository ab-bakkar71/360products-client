
import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/lib/data/data";


const explorePage = async() => {

  const products = await getProduct();
  return (
    <section className="min-h-[calc(100vh-70px)] w-full bg-neutral-bg py-4  sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-sm lg:text-2xl">
            Explore Products
          </h1>
          <p className=" text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            Discover quality products from trusted sellers across Bangladesh.
            Browse categories, compare prices, and find the perfect item that
            matches your needs—all in one place.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInUp">
          {
            products.map(product => <ProductCard key={product._id} product={product}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default explorePage;
