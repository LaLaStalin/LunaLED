import Button from "@mui/material/Button";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <section
      className="w-full h-[739px] bg-paperLight dark:bg-paperDark ]
    "
    >
      <div className="flex flex-col items-center gap-[24px] h-full pt-[109px]">
        <h1 className="text-[78px] font-bold uppercase tracking-[-1.5px]">
          best spotlight led for you
        </h1>
        <a className="text-center">
          Lorem ipsum dolor sit amet consectetur. Adipiscing sed cursus odio
          velit et faucibus lacus ante montes. Nunc adipiscing turpis congue
          <br />
          sednon ut. Ornare nunc feugiat feugiat mauris cum.
        </a>
        <Button
          size="large"
          variant="outlined"
          href="/"
          className="font-semibold"
        >
          Shop now
        </Button>
        <Image
          src="/assets/product/cob-circlr-100w.png"
          alt="cob-circlr-100w"
          height={442}
          width={500}
        />
      </div>
    </section>
  );
};

export default HomeBanner;
