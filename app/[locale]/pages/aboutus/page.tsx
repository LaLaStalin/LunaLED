import { HeroBanner } from "@/components";

interface pageProps {}

const AboutUs: React.FC<pageProps> = () => {
  return (
    <div>
      <HeroBanner heroTitle="About us" />
    </div>
  );
};

export default AboutUs;
