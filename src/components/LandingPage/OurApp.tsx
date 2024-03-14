import { appleStoreLink, googlePlayLink } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurApp = () => {
  const text = useTranslations("ourApp");
  return (
    <section
      id="our_app"
      style={{
        backgroundImage: `url('/images/our-app.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-8 my-8 aspect-[7/7] relative sm:aspect-[12/7] md:aspect-[15/7] lg:aspect-[17/7] flex items-center "
    >
      <div className="bg-white bg-opacity-35 absolute w-full h-full inset-0" />
      <div className="container our-app ">
        <div className="max-w-[550px] relative">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl">
            {text("title")}
          </h2>
          <p className="my-4 text-xl">{text("desc")}</p>
          <a
            href={googlePlayLink}
            className="block relative w-48 h-14"
            target="_blank"
          >
            <Image src="/images/google-play-logo.webp" alt="google play" fill />
          </a>
          <a
            href={appleStoreLink}
            className="block relative w-48 h-14 mt-2"
            target="_blank"
          >
            <Image src="/images/app-store-logo.webp" alt="google play" fill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurApp;
