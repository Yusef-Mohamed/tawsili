import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "./ui/button";

interface ContactSectionProps {
  type: "user" | "company";
}
const ContactSection: React.FC<ContactSectionProps> = ({ type }) => {
  const text = useTranslations(`${type}Contact`);
  return (
    <section className="grid py-8 lg:grid-cols-2 container">
      <div>
        <div className="lg:w-3/4">
          <h2 className="text-2xl mb-5 font-semibold">{text("title")}</h2>
          <form>
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg block font-semibold">
                {text("name")}
              </label>
              <input
                type="text"
                className="w-full block bg-main-gray px-4 py-3 rounded-md"
                id="name"
                placeholder={text("name_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="varInput" className="text-lg block font-semibold">
                {text("varInput")}
              </label>
              <input
                type="text"
                className="w-full block bg-main-gray px-4 py-3 rounded-md"
                id="varInput"
                placeholder={text("varInput_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-lg block font-semibold">
                {text("phone")}
              </label>
              <input
                type="text"
                className="w-full block bg-main-gray px-4 py-3 rounded-md"
                id="phone"
                placeholder={text("phone_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg block font-semibold">
                {text("email")}
              </label>
              <input
                type="email"
                className="w-full block bg-main-gray px-4 py-3 rounded-md"
                id="email"
                placeholder={text("email_placeholder")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg block font-semibold">
                {text("message")}
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full block bg-main-gray px-4 min-h-36 py-3 rounded-md"
                placeholder={text("message_placeholder")}
              ></textarea>
            </div>
            <Button className="w-3/4 mt-4 block  mx-auto" isRounded>
              {text("send")}
            </Button>
          </form>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("/images/our-app.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full hidden lg:block aspect-video lg:aspect-auto h-full relative rounded-xl overflow-hidden"
      ></div>
    </section>
  );
};

export default ContactSection;
