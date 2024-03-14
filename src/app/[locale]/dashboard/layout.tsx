import DashboardHeader from "@/components/DashboardLayout/DashboardHeader";
import DashboardSidebar from "@/components/DashboardLayout/DashboardSidebar";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(params.locale);
  const text = useTranslations("dashboard");
  return (
    <>
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />

        <div className="flex-1">
          <p className="py-2 bg-main-red mb-6 text-white text-lg text-center">
            {text("coming_soon")}
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
