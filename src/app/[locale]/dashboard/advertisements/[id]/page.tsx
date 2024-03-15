import AddForm from "@/components/forms/AddForm";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);
  const text = useTranslations("advertisements");

  return (
    <section>
      <h2 className="mx-6 text-2xl font-semibold">{text("add_title")}</h2>
      <AddForm />
    </section>
  );
};

export default Page;
