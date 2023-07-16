"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface heroBannerType {
  heroTitle: string;
}

const HeroBanner = ({ heroTitle }: heroBannerType) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <section
        className="bg-[url('/assets/banner/bg-HeroBanner.png')]
        bg-cover h-[200px] bg-no-repeat
        relative"
      >
        <div className="flex flex-col justify-center items-center h-full ">
          <h1 className="text-[#fff] text-[64px] font-bold">
            {heroTitle.toUpperCase()}
          </h1>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href={`/pages/${heroTitle.toLowerCase()}`}
              aria-current="page"
            >
              {heroTitle}
            </Link>
          </Breadcrumbs>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default HeroBanner;
