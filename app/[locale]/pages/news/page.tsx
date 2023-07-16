import { HeroBanner } from "@/components";

interface pageProps {}

const News: React.FC<pageProps> = () => {
  return (
    <div>
      <HeroBanner heroTitle="News" />
    </div>
  );
};

export default News;
