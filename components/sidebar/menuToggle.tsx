"use client";

import { useThemeContext } from "@/context/theme";

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke={props.theme == "light" ? "#050505" : "#E4E6EB"}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => {
  const { theme }: any = useThemeContext();

  return (
    <>
      <button onClick={toggle} className="toggle-btn dark:bg-paperDark">
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            theme={theme}
            d="M 2 2.5 L 20 2.5"
            className="top "
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            theme={theme}
            d="M 2 9.423 L 20 9.423"
            opacity="1"
            className="middle"
          />
          <Path
            theme={theme}
            d="M 2 16.346 L 20 16.346"
            className="bottom "
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </>
  );
};
