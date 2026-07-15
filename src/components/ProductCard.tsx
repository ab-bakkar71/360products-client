import { Product } from "@/interfaces/interfaces";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidLocationPlus } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

interface MyProductProps {
  product: Product;
}

const ProductCard = ({ product }: MyProductProps) => {
  return (
    <Card
  className="group overflow-hidden rounded-global border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
  variant="secondary"
>
  {/* Product Image */}
  <div className="relative aspect-square w-full overflow-hidden">
    <Image
      src={product.image}
      alt={product.title}
      fill
      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
      className="object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Header */}
  <Card.Header>
    <Card.Title className="line-clamp-1 text-xl font-bold text-gray-900">
      {product.title}
    </Card.Title>

    <span className="mt-2 inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
      {product.category}
    </span>

    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
      {product.shortDescription}
    </p>
  </Card.Header>

  {/* Content */}
  <Card.Content>
    <div className="mb-3 flex items-center gap-2 text-gray-500">
      <BiSolidLocationPlus
        className="text-secondary"
        size={18}
      />
      <span className="text-sm">{product.location}</span>
    </div>

    <div className="flex items-center text-2xl font-bold text-primary">
      <TbCurrencyTaka />
      <span>{product.price}</span>
    </div>
  </Card.Content>

  {/* Footer */}
  <Card.Footer>
    <Link
      href={`/explore/${product._id}`}
      className="w-full rounded-global bg-primary py-2.5 text-center font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:shadow-lg"
    >
      View Details
    </Link>
  </Card.Footer>
</Card>
  );
};

export default ProductCard;
