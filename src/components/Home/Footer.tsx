import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-primary"
          >
            <RiShoppingBagLine className="h-6 w-6 text-secondary" />
            <span>
              360<span className="text-secondary">Products</span>
            </span>
          </Link>
          <p className="text-sm mt-3">
            360Products is a modern marketplace where buyers can discover
            quality products and sellers can showcase their items with ease.
            Simple, secure, and built for a better shopping experience.
          </p>
          <div className="mt-5 flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-[#0A66C2]"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            >
              <FaGithub className="h-6 w-6" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-black"
            >
              <FaXTwitter className="h-6 w-6" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-pink-500"
            >
              <FaInstagramSquare className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-lg text-gray-800">Quick Links</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            
            <li>
              <Link className="hover:underline" href="/blog">
                Blog
              </Link>
            </li>
            
          </ul>
        </div>

        <div className="max-w-80 space-y-3">
          <div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.667 8.335c0 4.16-4.616 8.494-6.166 9.832a.83.83 0 0 1-1.002 0c-1.55-1.338-6.166-5.672-6.166-9.832a6.667 6.667 0 0 1 13.334 0"
                  stroke="#45556c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 8.335 9.167 10 12.5 6.668"
                  stroke="#45556c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Address
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                548 Market Street, Suite 410
                <br />
                San Francisco, United States
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M10.95 13.115a.79.79 0 0 0 .96-.24l.282-.368a1.58 1.58 0 0 1 1.266-.633h2.375a1.583 1.583 0 0 1 1.584 1.583v2.375a1.583 1.583 0 0 1-1.584 1.583 14.25 14.25 0 0 1-14.25-14.25 1.583 1.583 0 0 1 1.584-1.583h2.375a1.583 1.583 0 0 1 1.583 1.583V5.54a1.58 1.58 0 0 1-.633 1.267l-.37.278a.79.79 0 0 0-.232.976 11.1 11.1 0 0 0 5.06 5.054"
                    stroke="#45556c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h19v19H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Phone
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                +1 (55) 123-4567
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2.5 flex-1">
            <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18.333 5.832-7.492 4.773a1.67 1.67 0 0 1-1.674 0l-7.5-4.773"
                  stroke="#45556c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.667 3.332H3.333c-.92 0-1.666.746-1.666 1.667v10c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666v-10c0-.92-.746-1.667-1.666-1.667"
                  stroke="#45556c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-medium text-zinc-800 mb-0.5">
                Email
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                contact@360proudct.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:text-primary hover:underline">
            360Product
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
