"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LangChanger from "./LangChanger";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/constants";
import HeaderLink from "./HeaderLink";
import { Link } from "@/navigation";

const RootHeader = () => {
  const header = useTranslations("header");
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <header
      style={{
        backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "transparent",
      }}
      className="fixed right-0 top-0 z-10 w-full text-white transition-all"
    >
      <div className="flex justify-between container mx-auto items-center gap-8">
        <Image
          src="/logo.png"
          alt="logo"
          className="transition-all"
          width={isScrolled ? 150 : 200}
          height={isScrolled ? 105 : 140}
        />
        <div className="lg:flex gap-8 items-center hidden">
          <nav className="flex items-center lg:gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <HeaderLink href={link.to} key={link.slug}>
                {header(link.slug)}
              </HeaderLink>
            ))}
          </nav>
          <div className="flex gap-6 items-center">
            <LangChanger />
            <IoSearchOutline />
            <Link href="/login">
              <FaRegUser />
            </Link>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default RootHeader;
