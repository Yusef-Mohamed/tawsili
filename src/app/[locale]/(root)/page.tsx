import ClientsReview from "@/components/LandingPage/ClientsReview";
import ContactFrom from "@/components/LandingPage/ContactFrom";
import Features from "@/components/LandingPage/Features";
import HeroSection from "@/components/LandingPage/HeroSection";
import JoinUs from "@/components/LandingPage/JoinUs";
import MailService from "@/components/LandingPage/MailService";
import OurApp from "@/components/LandingPage/OurApp";
import RestaurantsMenu from "@/components/LandingPage/RestaurantsMenu";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  return (
    <main>
      <HeroSection />
      <Features />
      <RestaurantsMenu />
      <OurApp />
      <JoinUs />
      <ContactFrom />
      <ClientsReview />
      <MailService />
    </main>
  );
}
