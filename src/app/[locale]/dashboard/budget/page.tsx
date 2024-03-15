import { unstable_setRequestLocale } from "next-intl/server";
import BudgetBody from "./components/body";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <BudgetBody />
    </>
  );
};

export default Page;
