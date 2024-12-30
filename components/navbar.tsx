"use client";
import { useState } from "react";
import { AlignJustify, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="
      w-full
      bg-gradient-to-b 
      from-neutral-50
      to-neutral-300 
      bg-opacity-90
      text-slate-900
      py-6
      px-8
      space-y-6
      absolute
      top-28
      left-0
      right-0
      z-50
      shadow-lg
      rounded-md
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-8">
        <Link
          href="/pricing"
          className="text-lg font-semibold hover:text-gray-700"
          onClick={onClose}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-lg font-semibold hover:text-gray-700"
          onClick={onClose}
        >
          Contact
        </Link>
        <Link
          href="/book"
          className="text-lg font-semibold hover:text-gray-700"
          onClick={onClose}
        >
          Book a call
        </Link>
        <Link
          href="/services"
          className="text-lg font-semibold hover:text-gray-700"
          onClick={onClose}
        >
          Services
        </Link>
      </div>
    </motion.div>
  );
};

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // Toggle the mobile menu dropdown
  const toggleDropDown = () => {
    setIsDropDownVisible((prev) => !prev);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  // Toggle the "Brands" dropdown (close "Pricing" if open)
  const handleBrandsClick = () => {
    setIsBrandsOpen((prev) => !prev);
    setIsPricingOpen(false);
  };

  // Toggle the "Pricing" dropdown (close "Brands" if open)
  const handlePricingClick = () => {
    setIsPricingOpen((prev) => !prev);
    setIsBrandsOpen(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        {/* LOGO */}
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/warbler3.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-20 h-20 md:w-17 md:h-17 rounded-md"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden md:flex space-x-10 items-center
            text-slate-300 text-center 
            bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50
            to bg-neutral-400 bg-opacity-50
            cursor-pointer
          "
        >
          <Link href="/website-design" className="hover:text-gray-50">
            Website Design
          </Link>
          <Link href="/graphic-design" className="hover:text-gray-50">
            Graphic Design
          </Link>
          <Link href="/shopify-stores" className="hover:text-gray-50">
            Shopify Stores
          </Link>

          {/* BRANDS */}
          <div className="relative">
            {/* TRIGGER (Brands) */}
            <div
              className="flex items-center hover:text-gray-50 text-slate-300 text-center 
            bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50
            to bg-neutral-400 bg-opacity-50
            cursor-pointer"
              onClick={handleBrandsClick}
            >
              <span>Brands</span>
              {isBrandsOpen ? (
                <ChevronUp className="ml-1 w-4 h-4 " />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </div>

            {/* DROPDOWN (Brands) */}
            {isBrandsOpen && (
              <div
                className="
                  absolute bg-white shadow-md p-4 mt-2 rounded-md w-48
                  text-slate-900
                "
              >
                <Link
                  href="/brands/item1"
                  className="block hover:text-gray-700"
                  onClick={() => setIsBrandsOpen(false)}
                >
                  Brand Item 1
                </Link>
                <Link
                  href="/brands/item2"
                  className="block hover:text-gray-700"
                  onClick={() => setIsBrandsOpen(false)}
                >
                  Brand Item 2
                </Link>
                <Link
                  href="/brands/item3"
                  className="block hover:text-gray-700"
                  onClick={() => setIsBrandsOpen(false)}
                >
                  Brand Item 3
                </Link>
              </div>
            )}
          </div>

          {/* PRICING */}
          <div className="relative">
            {/* TRIGGER (Pricing) */}
            <div
              className="flex items-center hover:text-gray-50 text-slate-300 text-center 
            bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50
            to bg-neutral-400 bg-opacity-50
            cursor-pointer"
              onClick={handlePricingClick}
            >
              <span>Pricing</span>
              {isPricingOpen ? (
                <ChevronUp className="ml-1 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-1 w-4 h-4" />
              )}
            </div>

            {/* DROPDOWN (Pricing) */}
            {isPricingOpen && (
              <div
                className="
                  absolute bg-white shadow-md p-4 mt-2 rounded-md w-48
                  text-slate-900
                "
              >
                <Link
                  href="/pricing#basic"
                  className="block hover:text-gray-700"
                  onClick={() => setIsPricingOpen(false)}
                >
                  Basic Plan
                </Link>
                <Link
                  href="/pricing#standard"
                  className="block hover:text-gray-700"
                  onClick={() => setIsPricingOpen(false)}
                >
                  Standard Plan
                </Link>
                <Link
                  href="/pricing#premium"
                  className="block hover:text-gray-700"
                  onClick={() => setIsPricingOpen(false)}
                >
                  Premium Plan
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE MENU ICONS */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              {/* MOBILE MENU DROPDOWN */}
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* CONTACT BUTTON (Desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
              inline-flex h-12 animate-shimmer items-center justify-center 
              rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
