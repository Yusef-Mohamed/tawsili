import { useTranslations } from "next-intl";
import React from "react";
const HeroSection = () => {
  const text = useTranslations("hero");
  return (
    <section
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-[75vh] lg:min-h-[100vh] py-[100px] flex items-center"
    >
      <div className="container">
        <h1 className="max-w-[900px] hero-heading leading-[55px] text-center sm:text-start sm:leading-[80px] md:leading-[90px] lg:leading-[100px] text-[45px] sm:text-[70px] md:text-[80px] lg:text-[90px] text-white font-semibold">
          {text("title")}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
