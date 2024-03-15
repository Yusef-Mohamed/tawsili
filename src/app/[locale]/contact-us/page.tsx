import ContactSection from "@/components/ContactusSection";
import RootHeader from "@/components/RootLayout/Header";

const Page = () => {
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
