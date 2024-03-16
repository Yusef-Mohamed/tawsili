"use client";
import Image from "next/image";
import SidebarLink, { SidebarLocaleChanger } from "./SidebarLink";
import { useTranslations } from "next-intl";
import { CiDollar } from "react-icons/ci";
import { ISidebarLink } from "@/types";
import { LuLogOut } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
const links: ISidebarLink[] = [
  {
    slug: "dashboard",
    to: "/dashboard/analysis",
  },
  {
    slug: "advertisements",
    to: "/dashboard/advertisements",
  },
  {
    slug: "branches",
    to: "/dashboard/branches",
  },
  {
    slug: "branches_time",
    to: "/dashboard/branches-time",
  },
  {
    slug: "meals",
    to: "/dashboard/meals",
  },
  {
    slug: "budget",
    to: "/dashboard/budget",
    className: "bg-green-500 text-white",
    icon: <CiDollar className="text-2xl" />,
  },
];
interface DashboardSidebarProps {
  isMenu?: boolean;
  closeMenu?: () => void;
}
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isMenu,
  closeMenu,
}) => {
  const text = useTranslations("dashboardSidebar");
  return (
    <aside
      className={cn(` text-black`, {
        "hidden lg:block border-e w-[350px] xl:w-[450px]": !isMenu,
        "": isMenu,
      })}
    >
      <div className="resBanner w-full relative">
        <Image src={"/temp/restaurante2.jpg"} fill alt="banner" />
      </div>
      <div className="px-8">
        <div className="flex items-center gap-4 -translate-y-[10%]">
          <div className="aspect-square rounded-full overflow-hidden  sm:w-32  sm:h-32 w-24 h-24 relative">
            <Image src={"/temp/restauranteLogo2.png"} fill alt="banner" />
          </div>
          <h2 className="sm:text-2xl text-xl md:text-3xl font-semibold flex-1">
            <span>ماكدونالدز</span> - <span>Macdonald</span>
          </h2>
        </div>
        <div className="space-y-4">
          {links.map((link) => (
            <SidebarLink key={link.slug} closeMenu={closeMenu} link={link} />
          ))}
          <SidebarLocaleChanger closeMenu={closeMenu} />
          <Link
            href={"/"}
            onClick={() => {
              closeMenu && closeMenu();
            }}
            className="flex items-center gap-2 w-full transition-all text-main-red hover:bg-main-red hover:text-white font-semibold text-lg py-4 px-6 rounded-md"
          >
            <LuLogOut />
            {text("logout")}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
