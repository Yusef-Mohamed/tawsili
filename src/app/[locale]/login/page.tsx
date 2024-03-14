import LoginForm from "@/components/forms/LoginForm";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="formPage">
      <section className="mini-container max-w-[500px] bg-main-gray p-8 rounded-xl">
        <LoginForm />
      </section>
    </main>
  );
};

export default Page;
