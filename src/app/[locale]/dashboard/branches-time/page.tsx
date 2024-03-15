import { unstable_setRequestLocale } from "next-intl/server";
import BranchesTimeBody from "./components/body";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <BranchesTimeBody />
    </>
  );
};

export default Page;
