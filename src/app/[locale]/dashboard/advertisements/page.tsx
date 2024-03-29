import { unstable_setRequestLocale } from "next-intl/server";
import AddsBody from "./components/body";

const Page = ({ params }: { params: { locale: string } }) => {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <AddsBody />
    </>
  );
};

export default Page;
