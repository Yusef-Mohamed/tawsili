import { TbDiscount2 } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { useTranslations } from "next-intl";
const featuresList = [
  {
    logo: <BsBoxSeam />,
    title: "feat_1_title",
    description: "feat_1_description",
  },
  {
    logo: <TbDiscount2 />,
    title: "feat_2_title",
    description: "feat_2_description",
  },
  {
    logo: <GoCreditCard />,
    title: "feat_3_title",
    description: "feat_3_description",
  },
];
const Features = () => {
  const text = useTranslations("features");
  return (
    <section className="grid md:grid-cols-2 py-8 lg:py-0 lg:grid-cols-3 lg:-translate-y-1/2 mini-container gap-8">
      {featuresList.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-xl box-shadow">
          <div className="w-fit mx-auto text-3xl relative ">
            <div className="w-6 h-6 rounded-full block bg-main-red absolute opacity-75 -translate-x-2 -translate-y-1" />
            <div className="relative">{feature.logo}</div>
          </div>
          <h3 className="text-2xl font-semibold text-center my-3">
            {text(feature.title)}
          </h3>
          <p className="text-center leading-[20px]">
            {text(feature.description)}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Features;
