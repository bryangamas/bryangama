import { useRouter } from "next/dist/client/router";

const useLocale = () => {
  const router = useRouter();
  const { locale } = router;

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
        hash: window.location.hash,
      },
      undefined,
      { locale: newLocale, scroll: false }
    );
  };

  return {
    locale,
    toggleLocale,
  };
};

export default useLocale;
