import AnalysisCard from "@/components/AnalysisCard";
import AnalysisCharts from "@/components/AnalysisCharts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
interface ICard {
  value: number;
  title: string;
  count: string;
  className: string;
}

const cards: ICard[] = [
  {
    value: 55,
    title: "branches_count",
    count: "branch",
    className: "to-[#0DAEE0] from-[#0160E9]",
  },
  {
    value: 6789,
    title: "orders_count",
    count: "order",
    className: "to-[#F86B82] from-[#F8506D]",
  },
  {
    value: 546454,
    title: "net_sales",
    count: "real",
    className: "to-[#45D2A4] from-[#059969]",
  },
  {
    value: 455,
    title: "compensation",
    count: "real",
    className: "to-[#F0A25C] from-[#F76C2D]",
  },
];
const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);
  const text = useTranslations("analysis");
  return (
    <main>
      <h2 className="px-6 text-2xl font-semibold">{text("title")}</h2>
      <div className="grid px-6 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {cards.map((card, index) => (
          <AnalysisCard key={index} card={card} />
        ))}
      </div>
      <h2 className="mt-4 px-6 text-2xl font-semibold">
        {text("weakly_net_profit")}
      </h2>
      <div className="overflow-hidden mx-auto w-[85vw] sm:w-auto  sm:mx-6 p-4 sm:p-8 border rounded-xl mt-8">
        <div className="flex items-center gap-4">
          <BsChevronRight className="text-4xl text-gray-400 arOnly" />
          <BsChevronLeft className="text-4xl text-gray-400 enOnly" />
          <div className="text-end w-full flex-1">
            <span className="text-sm text-gray-500">Feb 3 - 9</span>
            <br />
            <span className="text-2xl font-semibold">
              16565847.5 {text("real")}
            </span>
          </div>
          <BsChevronRight className="text-4xl text-gray-400  enOnly" />
          <BsChevronLeft className="text-4xl text-gray-400 arOnly " />
        </div>
        <AnalysisCharts />
      </div>
    </main>
  );
};

export default Page;
