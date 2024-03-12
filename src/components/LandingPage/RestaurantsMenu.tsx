import { useTranslations } from "next-intl";
import React from "react";
import SectionHeading from "../ui/section-heading";
import Image from "next/image";
import { cn } from "@/lib/utils";
const tempData = [
  {
    bgColor: "#FFDFE1",
    textColor: "#EE3A43",
    desc: "Limo pizza is available now",
    logo: "/temp/restauranteLogo1.png",
    banner: "/temp/restaurante1.jpg",
  },
  {
    bgColor: "#E9DBAA",
    textColor: "#D62300",
    desc: "The big mac في انتظارك",
    logo: "/temp/restauranteLogo2.png",
    banner: "/temp/restaurante2.jpg",
  },
];
const RestaurantsMenu = () => {
  const text = useTranslations("restaurantsMenu");
  const common = useTranslations("common");
  const locale = common("locale");
  return (
    <section className="container py-8 lg:pt-0" id="restaurants_menu">
      <SectionHeading title={text("title")} />
      <div className="lg:grid-cols-2 grid gap-6 mt-8">
        {tempData.map((item, index) => (
          <div
            key={index}
            className="relative resBanner rounded-xl overflow-hidden flex justify-end items-end"
          >
            <Image alt={item.desc} src={item.banner} fill />
            <div
              style={{
                backgroundColor: item.bgColor,
                color: item.textColor,
              }}
              className={cn(
                "relative px-4 py-8 max-w-[50%] sm:max-w-[280px] h-full sm:h-fit",
                locale === "ar" ? "rounded-tr-[75px]" : "rounded-tl-[75px]"
              )}
            >
              <div className="aspect-square relative w-1/3 ms-auto">
                <Image
                  src={item.logo}
                  alt="logo"
                  className="ms-auto mb-4"
                  fill
                />
              </div>
              <h3 className="font-semibold mt-4 text-2xl lg:text-3xl text-center lg:my-4">
                {item.desc}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantsMenu;
