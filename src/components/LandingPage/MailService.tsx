import { useTranslations } from "next-intl";
import Button from "../ui/button";

const MailService = () => {
  const text = useTranslations("mainService");
  return (
    <section className="bg-main-gray py-12">
      <div className="mini-container">
        <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-3xl">
          {text("title")}
        </h2>
        <p className="text-center text-sm sm:text-base my-4 text-gray-500">
          {text("desc")}
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <input
            type="text"
            placeholder={text("mail")}
            className="rounded-xl h-12 py-3 flex-1 block bg-white w-full px-4"
          />
          <Button className="h-12 rounded-xl">{text("button")}</Button>
        </form>
      </div>
    </section>
  );
};

export default MailService;
