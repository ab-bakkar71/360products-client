
import { Accordion } from "@heroui/react";
import {
  BiChevronDown,
  BiPackage,
  BiShield,
  BiUser,
} from "react-icons/bi";
import {
  FaBoxOpen,
  FaMoneyBillWave,
  FaStore,
} from "react-icons/fa";

const items = [
  {
    title: "What is 360Products?",
    icon: <FaStore />,
    content:
      "360Products is an online marketplace where buyers can discover quality products and sellers can easily list and manage their products from a personalized dashboard.",
  },
  {
    title: "Do I need an account to add products?",
    icon: <BiUser />,
    content:
      "Yes. You need to create an account and log in before listing products. This helps us keep every product connected to its rightful owner.",
  },
  {
    title: "Can I edit or delete my products later?",
    icon: <FaBoxOpen />,
    content:
      "Absolutely. From your dashboard you can view, update, or permanently delete any product you've added whenever you want.",
  },
  {
    title: "Is listing products free?",
    icon: <FaMoneyBillWave />,
    content:
      "Yes. Listing products on 360Products is completely free. Simply upload an image, enter the product details, and publish it instantly.",
  },
  {
    title: "Are my account and product data secure?",
    icon: <BiShield />,
    content:
      "Yes. We use secure authentication and modern web technologies to help protect your account and product information.",
  },
  {
    title: "How can I explore products?",
    icon: <BiPackage />,
    content:
      "Visit the Explore page to browse products from different categories. You can view product details, compare listings, and find items that match your needs.",
  },
];

const Faq = () => {
    return (
         <section className="bg-white-bg py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold uppercase tracking-widest text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Have Questions? We've Got Answers
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            Everything you need to know about buying, selling, and managing
            products on 360Products.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          variant="surface"
          className="w-full max-w-4xl mx-auto rounded-global bg-white shadow-lg border border-gray-100"
        >
          {items.map((item, index) => (
            <Accordion.Item
              key={index}
              className="border-b border-gray-100 last:border-none"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="px-6 py-5 hover:bg-neutral-bg transition-colors">
                  <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary text-lg">
                    {item.icon}
                  </span>

                  <span className="flex-1 text-left font-semibold text-gray-800">
                    {item.title}
                  </span>

                  <Accordion.Indicator className="text-xl text-secondary transition-transform data-[state=open]:rotate-180">
                    <BiChevronDown />
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>

              <Accordion.Panel>
                <Accordion.Body className="px-20 pb-6 text-gray-600 leading-7">
                  {item.content}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
    );
};

export default Faq;