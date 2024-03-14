import { useTranslations } from "next-intl";
import SectionHeading from "../ui/section-heading";
import Image from "next/image";
import { Link } from "@/navigation";

const cards = [
  {
    title: "restaurant",
    image: "/images/join-us-res.jpg",
    link: "/join-us/restaurant",
  },
  {
    title: "driver",
    image: "/images/join-us-dr.jpg",
    link: "/join-us/driver",
  },
];
const JoinUs = () => {
  const text = useTranslations("joinUs");
  // join-us-res.jpg
  // join-us-dr.jpg
  return (
    <section className="py-8 container" id="join_us">
      <SectionHeading title={text("title")} />
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative resBanner w-full rounded-xl overflow-hidden flex items-end pb-6 sm:pb-20 md:pb-28 lg:pb-12 justify-center"
          >
            <Image src={card.image} alt={text(card.title)} fill />
            <div className="relative z-[1]">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {text(card.title)}
              </h3>
              <Link
                href={card.link}
                className="bg-main-red hover:scale-105 transition-all font-semibold text-white px-6 sm:px-10 text-lg sm:text-xl md:text-2xl py-2 sm:py-4 rounded-full block w-fit mt-8 mx-auto"
              >
                {text("join_now")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
