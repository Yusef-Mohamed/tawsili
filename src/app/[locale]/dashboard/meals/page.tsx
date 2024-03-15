import { unstable_setRequestLocale } from "next-intl/server";
import MealsTimeBody from "./components/body";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <MealsTimeBody />
    </>
  );
};

export default Page;
