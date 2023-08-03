import { useMediaQuery } from "@mui/material";
import Image from "next/image";

const infoAdvantages = [
  {
    imgIcon: "/assets/banner/icons/icon-advantages.png",
    text: "Warranty service for 1 year",
  },
  {
    imgIcon: "/assets/banner/icons/icon-advantages.png",
    text: "Warranty service for 1 year",
  },
  {
    imgIcon: "/assets/banner/icons/icon-advantages.png",
    text: "Warranty service for 1 year",
  },
  {
    imgIcon: "/assets/banner/icons/icon-advantages.png",
    text: "Warranty service for 1 year",
  },
];

const advantages = () => {
  const matches = useMediaQuery("(max-width:770px)");

  return (
    <section
      className="w-full bg-cover bg-center px-[16px] flex flex-col items-center justify-center gap-[96px] sm:gap-[58px] 
      h-[540px] sm:h-[800px] border-t-[0.8px] border-[#212B36]"
      style={{ backgroundImage: "url(/assets/banner/bg-Advantages.png)" }}
    >
      <h1 className="uppercase text-[50px] sm:text-[32px] font-semibold text-[#fff] tracking-[-1.5px]">
        our advantages
      </h1>

      <div
        className="w-full gap-8 justify-items-center"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
        }}
      >
        {infoAdvantages.map((info, index) => (
          <span
            className="flex flex-col items-center gap-[24px] w-[200px]"
            key={index}
          >
            <Image
              src={info.imgIcon}
              alt="advantages"
              width={matches ? 50 : 60}
              height={matches ? 50 : 60}
              objectFit="cover"
              loading="lazy"
              className="animate-icon-advantages"
            />
            <p className="text-[24px] sm:text-[18px] text-[#fff]  text-center leading-7 ">
              {info.text}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default advantages;
