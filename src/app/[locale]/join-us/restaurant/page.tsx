import { JoinUsRestaurant } from "@/components/join-us/restaurant/JoinUsRestaurant";
import { unstable_setRequestLocale } from "next-intl/server";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);
  return (
    <>
      <main className="formPage">
        <JoinUsRestaurant />
      </main>
    </>
  );
};

export default Page;
