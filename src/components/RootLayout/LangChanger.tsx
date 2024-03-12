"use client";
import useChangeLocale from "@/hooks/useChangeLocale";
import { useTranslations } from "next-intl";
interface LangChangerProps {
  className?: string;
  onClick?: () => void;
}
const LangChanger: React.FC<LangChangerProps> = ({ className, onClick }) => {
  const common = useTranslations("common");
  const locale = common("locale");
  const [onLangChange] = useChangeLocale();
  return (
    <button
      className={className}
      onClick={() => {
        if (onClick) onClick();
        onLangChange(locale === "ar" ? "en" : "ar");
      }}
    >
      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
};

export default LangChanger;
