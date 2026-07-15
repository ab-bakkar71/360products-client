"use client";

import Image from "next/image";
import Link from "next/link";
import { Table, Button } from "@heroui/react";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Product } from "@/interfaces/interfaces";
import DeleteProduct from "./DeleteProduct";

interface ManageProductTableProps {
  products: Product;
}

const ManageProductTable = ({
  products,
  
}: ManageProductTableProps) => {
  return (
    <Table variant="primary">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Manage Products"
          className="min-w-[900px]"
        >
          <Table.Header>
            <Table.Column isRowHeader>Product</Table.Column>
            <Table.Column>Category</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Location</Table.Column>
            <Table.Column align="center">Action</Table.Column>
          </Table.Header>

          <Table.Body>
            {products.map(product => (
              <Table.Row key={product._id}>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-lg border">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {product.title}
                      </p>

                      <p className="text-sm text-gray-500 line-clamp-1">
                        {product.shortDescription}
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell>{product.category}</Table.Cell>

                <Table.Cell>
                  <span className="font-semibold text-primary">
                    ৳ {product.price}
                  </span>
                </Table.Cell>

                <Table.Cell>{product.location}</Table.Cell>

                <Table.Cell>
                  <div className="flex items-center justify-center gap-2">
                    <Link href={`/explore/${product._id}`}>
                      <Button
                        isIconOnly
                        variant="primary"
                        aria-label="View Product"
                      >
                        <FaEye size={18} />
                      </Button>
                    </Link>

                      <DeleteProduct id={product._id!}/>
                    
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default ManageProductTable;