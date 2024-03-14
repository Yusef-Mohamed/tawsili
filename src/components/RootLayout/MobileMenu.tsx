"use client";

import { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import Sheet from "../ui/sheet";
import { navLinks } from "@/constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import HeaderLink from "./HeaderLink";
import LangChanger from "./LangChanger";
import { IoSearchOutline } from "react-icons/io5";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const header = useTranslations("header");
  const linksClasses =
    "block py-2 text-2xl text-center border-b border-border hover:bg-gray-50 transition-all w-full flex items-center justify-center";
  return (
    <>
      <button
        className="lg:hidden text-2xl"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        <FaBars />
      </button>
      <Sheet
        withClose={true}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <nav>
          {navLinks.map((link) => (
            <HeaderLink
              className={linksClasses}
              fn={() => setIsMenuOpen(false)}
              key={link.slug}
              href={link.to}
            >
              {header(link.slug)}
            </HeaderLink>
          ))}
          <Link
            className={linksClasses}
            onClick={() => setIsMenuOpen(false)}
            href={"/login"}
          >
            <FaRegUser />
          </Link>
          <Link
            className={linksClasses}
            onClick={() => setIsMenuOpen(false)}
            href={"/"}
          >
            <IoSearchOutline />
          </Link>

          <LangChanger
            onClick={() => setIsMenuOpen(false)}
            className={linksClasses}
          />
        </nav>
      </Sheet>
    </>
  );
};

export default MobileMenu;
