import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CardProps {
  card: {
    value: number;
    title: string;
    count: string;
    className: string;
  };
}
const AnalysisCard: React.FC<CardProps> = ({ card }) => {
  const text = useTranslations("analysis");
  return (
    <div
      className={cn(
        "w-full text-white bg-gradient-to-r font-semibold p-4 rounded-lg pb-16 relative",
        card.className
      )}
    >
      <h4>{text(card.title)}</h4>
      <h2 className="font-bold text-center text-5xl mt-4">
        {card.value} <span className="text-sm">/ {text(card.count)}</span>
      </h2>
      <div className="absolute aspect-[30/6] w-full bottom-0 right-0 ">
        <Image src="/analysis.png" alt="analysis" fill />
      </div>
    </div>
  );
};
export default AnalysisCard;
