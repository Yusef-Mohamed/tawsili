import { useTranslations } from "next-intl";
import Button from "../ui/button";

const ContactFrom = () => {
  const text = useTranslations("contact");
  return (
    <section className="mini-container py-8">
      <h2 className="text-center heading2 mb-16">{text("heading")}</h2>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            placeholder={text("first_name")}
            className="text-black bg-main-gray w-full px-6 py-4 placeholder:text-black text-lg font-semibold"
          />{" "}
          <input
            placeholder={text("last_name")}
            className="text-black bg-main-gray w-full px-6 py-4 placeholder:text-black text-lg font-semibold"
          />
        </div>
        <input
          placeholder={text("phone")}
          className="text-black bg-main-gray w-full px-6 py-4 placeholder:text-black text-lg font-semibold"
        />
        <input
          placeholder={text("email")}
          className="text-black bg-main-gray w-full px-6 py-4 placeholder:text-black text-lg font-semibold"
        />
        <textarea
          placeholder={text("message")}
          className="text-black min-h-40 bg-main-gray w-full px-6 py-4 placeholder:text-black text-lg font-semibold"
        ></textarea>
        <Button className="w-full">{text("submit")}</Button>
      </form>
    </section>
  );
};

export default ContactFrom;
