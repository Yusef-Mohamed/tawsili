import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "../../globals.css";
import { unstable_setRequestLocale } from "next-intl/server";
import RootHeader from "@/components/RootLayout/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";
const almarai = Almarai({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  if (locale === "ar") {
    return {
      title: "توصيلي - خدمة التوصيل الطعام في السعودية",
      description:
        "توصيلي - نحن نقدم خدمة توصيل الطعام السريعة والموثوقة في جميع أنحاء المملكة العربية السعودية. اطلب الآن واستمتع بأفضل الأطعمة من مطاعمك المفضلة.",
      keywords: "توصيل, توصيل الطعام, السعودية, خدمة التوصيل, طعام, مطاعم",
    };
  } else {
    return {
      title: "Tawsili - Food Delivery Service in Saudi Arabia",
      description:
        "Tawsili - We provide fast and reliable food delivery service all over Saudi Arabia. Order now and enjoy the best meals from your favorite restaurants.",
      keywords:
        "Tawsili, food delivery, Saudi Arabia, delivery service, food, restaurants",
    };
  }
}
export async function generateStaticParams() {
  return [
    {
      locale: "en",
    },
    {
      locale: "ar",
    },
  ];
}
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  //
  unstable_setRequestLocale(params.locale);
  const messages = useMessages();

  return (
    <html
      lang={params.locale}
      style={{ direction: params.locale == "ar" ? "rtl" : "ltr" }}
    >
      <body className={almarai.className}>
        <NextIntlClientProvider messages={messages}>
          <RootHeader />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
