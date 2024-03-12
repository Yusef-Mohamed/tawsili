import { useTranslations } from "next-intl";
import SectionHeading from "../ui/section-heading";
import { LuQuote } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { cn } from "@/lib/utils";

const reviews = [
  {
    rate: 5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 3,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 4.5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
  {
    rate: 5,
    customer: "سارة",
    desc: "تجربة فريدة ورائعة! لقد استمتعت بمزيج مدهش من التنوع الغني في المطاعم المتاحة على هذا التطبيق. لا يقتصر التنوع على الأطعمة فقط بل يشمل أيضًا خيارات الدفع الآمنة والفعّالة. تسوقت بسهولة وسرعة وشعرت بالراحة والثقة في كل مرة قمت فيها بالطلب. خدمة ممتازة وتجربة استخدام مميزة، شكرًا لكم على تحسين تجربة تناول الطعام لي.",
  },
];
const ClientsReview = () => {
  const text = useTranslations("clientsReview");
  return (
    <section
      className="container py-8"
      style={{
        direction: "ltr",
      }}
    >
      <SectionHeading title={text("title")} />
      <Carousel className="mt-12">
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className=" p-4 md:basis-1/2 lg:basis-1/3 md:border-x"
            >
              <div className="flex items-center justify-center text-gray-400 text-5xl">
                <LuQuote />
              </div>
              <p className="text-center text-gray-400">{review.desc}</p>
              <h4 className="text-xl font-semibold text-center my-4">
                {review.customer}
              </h4>
              <div className="flex items-center justify-center gap-1">
                <RenderStars rate={review.rate} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
const RenderStars = ({ rate }: { rate: number }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          className={cn(
            "text-2xl",
            rate >= 1 + index ? "text-yellow-500" : " text-gray-800"
          )}
        />
      ))}
    </>
  );
};
export default ClientsReview;
