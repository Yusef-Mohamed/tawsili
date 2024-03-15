import { unstable_setRequestLocale } from "next-intl/server";
import BranchesBody from "./components/body";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <BranchesBody />
    </>
  );
};

export default Page;
