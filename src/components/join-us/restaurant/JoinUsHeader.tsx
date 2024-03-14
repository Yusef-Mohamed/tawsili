import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const JoinUsHeader = () => {
  const text = useTranslations("joinUsPage");
  return (
    <div className="flex items-center justify-between">
      <Link className="block w-fit" href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          className="transition-all"
          width={200}
          height={140}
        />
      </Link>
      <h1 className="text-sm sm:text-base font-semibold">
        {text("as_restaurant")}
      </h1>
    </div>
  );
};
export default JoinUsHeader;
