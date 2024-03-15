"use client";

import { useState } from "react";
import { FaBars, FaRegUser } from "react-icons/fa";
import Sheet from "../ui/sheet";
import { navLinks } from "@/constants";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { IoSearchOutline } from "react-icons/io5";
import LangChanger from "../RootLayout/LangChanger";
import DashboardSidebar from "./DashboardSidebar";

const DashboardMobileMenu = () => {
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
        isOpen={isMenuOpen}
        className="px-0 py-0 w-[90%] max-w-[90%] min-w-[90%]"
        onClose={() => setIsMenuOpen(false)}
      >
        <DashboardSidebar isMenu />
      </Sheet>
    </>
  );
};

export default DashboardMobileMenu;
