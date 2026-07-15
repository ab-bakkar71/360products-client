"use client";

import CountUp from "react-countup";
import { FaBoxOpen, FaUsers, FaStore, FaStar } from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: 10000,
    suffix: "+",
    title: "Products Listed",
    icon: FaBoxOpen,
  },
  {
    id: 2,
    number: 2500,
    suffix: "+",
    title: "Happy Customers",
    icon: FaUsers,
  },
  {
    id: 3,
    number: 350,
    suffix: "+",
    title: "Trusted Sellers",
    icon: FaStore,
  },
  {
    id: 4,
    number: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    icon: FaStar,
  },
];

const Statistics = () => {
  return (
    <section className="bg-neutral-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
            Statistics
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Marketplace in Numbers
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Thousands of buyers and sellers trust 360Products every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-global border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="text-primary text-2xl" />
                </div>

                <h3 className="text-primary text-4xl font-bold">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                <p className="mt-2 font-medium text-gray-600">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;