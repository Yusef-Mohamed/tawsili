import RootHeader from "@/components/RootLayout/Header";
import { unstable_setRequestLocale } from "next-intl/server";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  //
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <RootHeader />

      {children}
    </>
  );
}
