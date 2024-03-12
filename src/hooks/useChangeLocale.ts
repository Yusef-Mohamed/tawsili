import React, { useTransition } from "react";
import { useRouter, usePathname } from "../navigation";

type Locale = "ar" | "en";

const useChangeLocale = (): [(value: Locale) => void, boolean] => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const onLangChange = (value: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  };

  return [onLangChange, isPending];
};

export default useChangeLocale;
