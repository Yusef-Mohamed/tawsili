import ContactSection from "@/components/ContactusSection";
import RootHeader from "@/components/RootLayout/Header";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);
  return (
    <>
      <RootHeader isStatic={true} />
      <main>
        <ContactSection type="company" />
        <ContactSection type="user" />
      </main>
    </>
  );
};

export default Page;
