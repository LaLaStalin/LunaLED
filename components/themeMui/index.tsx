"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useThemeContext } from "@/context/theme";
import { light } from "@mui/material/styles/createPalette";
import { useEffect } from "react";

interface Props {
  children: JSX.Element;
}

// darkTheme Material-UI
const darkTheme: any = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme: any = createTheme({
  palette: {
    mode: "light",
  },
});

const themeMui = ({ children }: Props) => {
  const { theme }: any = useThemeContext();

  console.log("d: ", theme);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default themeMui;
