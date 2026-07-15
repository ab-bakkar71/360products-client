

import AddProductForm from "@/components/user/AddProductForm";
import { getUserSession } from "@/lib/session";
import { FaPlusCircle } from "react-icons/fa";

const itemAddedPage = async() => {

  const user = await getUserSession();

  return (
    <section className="min-h-[calc(100vh-70px)] w-full bg-neutral-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl bg-white p-8 shadow-xl border border-gray-100 rounded-global">
        <div className="mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
          <FaPlusCircle className="text-3xl text-secondary" />
          <div>
            <h1 className="text-2xl font-bold text-primary">Add New Product</h1>
            <p className="text-xs text-gray-400">
              Upload a premium gadget or product to the 360Products ecosystem
            </p>
          </div>
        </div>
        <AddProductForm user={user}/>
      </div>
    </section>
  );
};

export default itemAddedPage;
