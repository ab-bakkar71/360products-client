import { ProductInput } from "@/interfaces/interfaces";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiSolidLocationPlus } from "react-icons/bi";
import { TbCurrencyTaka } from "react-icons/tb";

interface MyProductProps {
  product: ProductInput;
}

const ProductCard = ({ product }: MyProductProps) => {
  return (
    <Card className=" rounded-md relative" variant="secondary">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-md"
        ></Image>
      </div>
      <Card.Header>
        <Card.Title className="text-xl">{product.title}</Card.Title>
        <div className='flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2'>
          <p>{product.category}</p>
        </div>

        <p>{product.shortDescription}</p>
      </Card.Header>
      <Card.Content>
        <div className="flex items-center gap-1 text-sm text-gray-500  mt-2">
          <BiSolidLocationPlus
            className="inline text-gray-500 "
            size={18}
          />
          <span className="text-sm text-gray-500  ml-1">
            {product.location}
          </span>
        </div>
        <div className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-200">
          <TbCurrencyTaka />
          <span>{product.price}</span>
          <span className="text-sm text-gray-500  ml-1">
            Adoption Fee
          </span>
        </div>
      </Card.Content>

      <Card.Footer className="flex justify-between gap-2">
        <Link
          href={`/all-pets/${product._id}`}
          className="px-4 py-2 bg-transparent border border-gray-300 font-medium text-black  rounded-md hover:bg-gray-300 hover:dark:bg-gray-600 hover:scale-105 transition"
        >
          View Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
