import MealForm from "@/components/forms/MealForm";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);
  const text = useTranslations("advertisements");

  return (
    <section>
      <h2 className="mx-6 text-2xl font-semibold">{text("add_title")}</h2>
      <MealForm />
    </section>
  );
};

export default Page;
