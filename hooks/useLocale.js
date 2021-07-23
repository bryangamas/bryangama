import { useRouter } from "next/dist/client/router";

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";

    router.push(router.pathname, router.asPath, {
      locale: newLocale,
    });
  };

  return {
    locale,
    toggleLocale,
  };
};

export default useLocale;
