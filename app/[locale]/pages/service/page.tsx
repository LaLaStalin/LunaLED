import { HeroBanner } from "@/components";
import { useTranslations, useMessages } from "next-intl";

interface pageProps {}

const Service: React.FC<pageProps> = () => {
  const t = useTranslations("Index");

  return (
    <div>
      <HeroBanner heroTitle={t("titleService")} />
    </div>
  );
};

export default Service;
