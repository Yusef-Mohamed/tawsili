"use client";
import useChangeLocale from "@/hooks/useChangeLocale";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import { ISidebarLink } from "@/types";
import { useTranslations } from "next-intl";
import { GrLanguage } from "react-icons/gr";

interface SidebarLinkProps {
  link: ISidebarLink;
  closeMenu?: () => void;
}
const SidebarLink: React.FC<SidebarLinkProps> = ({ link, closeMenu }) => {
  const { slug, to, className, icon } = link;
  const pathName = usePathname();
  const text = useTranslations("dashboardSidebar");
  return (
    <Link
      onClick={() => {
        closeMenu && closeMenu();
      }}
      href={to}
      className={cn(
        `w-full flex items-center gap-2  transition-all bg-main-gray hover:bg-main-red hover:text-white font-semibold text-lg py-4 px-6 rounded-md`,
        className,
        {
          "bg-main-red text-white": pathName.split("/")[2] === to.split("/")[2],
        }
      )}
    >
      {icon && icon}
      {text(slug)}
    </Link>
  );
};
export const SidebarLocaleChanger: React.FC<{ closeMenu?: () => void }> = ({
  closeMenu,
}) => {
  const common = useTranslations("common");
  const locale = common("locale");
  const [onLangChange] = useChangeLocale();
  return (
    <button
      className="w-full flex items-center gap-2  transition-all bg-main-gray hover:bg-main-red hover:text-white font-semibold text-lg py-4 px-6 rounded-md"
      onClick={() => {
        onLangChange(locale === "ar" ? "en" : "ar");
        closeMenu && closeMenu();
      }}
    >
      <GrLanguage />

      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
};
export default SidebarLink;
