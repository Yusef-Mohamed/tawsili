import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import DashboardMobileMenu from "./DashboardMobileMenu";

const DashboardHeader = () => {
  const text = useTranslations("dashboardHeader");
  return (
    <header className="flex lg:justify-normal border-b justify-between px-8 lg:px-0">
      <div className="flex items-center justify-center lg:w-[450px] lg:border-e">
        <Image
          src="/logo.png"
          alt="logo"
          className="transition-all"
          width={200}
          height={140}
        />
      </div>
      <div className="px-8 flex-1 w-full hidden lg:flex items-center justify-between">
        <div className="text-xl">
          {text("hello_paragraph")}
          <br />
          <b>{text("management")} ماكدونالدز</b>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            className=" bg-main-gray px-6 py-2 rounded-md"
            placeholder={text("search")}
          />
          <FaRegUser />
        </div>
      </div>
      <DashboardMobileMenu />
    </header>
  );
};

export default DashboardHeader;
