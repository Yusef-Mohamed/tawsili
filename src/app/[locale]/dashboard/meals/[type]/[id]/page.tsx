import MealForm from "@/components/forms/MealForm";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string; type: string } }) => {
  unstable_setRequestLocale(params.locale);
  const text = useTranslations("meals");

  return (
    <section>
      <h2 className="mx-6 text-2xl font-semibold">
        {params.type === "section" ? text("add_section") : text("add_meal")}
      </h2>
      <MealForm type={params.type} />
    </section>
  );
};

export default Page;
