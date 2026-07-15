import ManageProductTable from "@/components/user/ManageProductTable";
import { getProductByEmail } from "@/lib/data/data";
import { getUserSession } from "@/lib/session";

import React from "react";

const manageProduct = async () => {
  const user = await getUserSession();

  if (!user?.email) {
    return <div>Please login first.</div>;
  }

  const products = await getProductByEmail(user.email);

  console.log(products);

  return (
    <section className="min-h-[calc(100vh-70px)] w-full bg-neutral-bg py-4  sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-sm lg:text-2xl">
            Manage Your Products
          </h1>
          <p className=" text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
            View, edit, and manage all the products you've listed in one place.
          </p>
        </div>
        <ManageProductTable products={products}/>
      </div>
    </section>
  );
};

export default manageProduct;
