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
  return (
    <section
      className="w-full bg-cover bg-center px-[16px] flex flex-col items-center justify-center gap-[96px] 
      h-[540px] border-t-[0.8px] border-[#212B36]"
      style={{ backgroundImage: "url(/assets/banner/bg-Advantages.png)" }}
    >
      <h1 className="uppercase text-[50px] font-semibold text-[#fff] tracking-[-1.5px]">
        our advantages
      </h1>

      <div className="flex gap-[101px]">
        {infoAdvantages.map((info, index) => (
          <span
            className="flex flex-col items-center gap-[24px]  w-[200px]"
            key={index}
          >
            <Image
              src={info.imgIcon}
              alt="advantages"
              width={60}
              height={60}
              objectFit="cover"
              loading="lazy"
              className="animate-icon-advantages"
            />
            <p className="text-[24px] text-[#fff]  text-center leading-7 ">
              {info.text}
            </p>
          </span>
        ))}
      </div>
    </section>
  );
};

export default advantages;
