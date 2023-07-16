import { HeroBanner } from "@/components";

interface pageProps {}

const Gallery: React.FC<pageProps> = () => {
  return (
    <div>
      <HeroBanner heroTitle="Gallery" />
    </div>
  );
};

export default Gallery;
