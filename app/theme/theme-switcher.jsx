"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import Logo from "@/components/logo";

function ThemeSwitcher({ themeSwitch }) {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full bg-neutral-0 dark:bg-neutral-700 p-3 rounded-xl flex justify-between items-center gap-x-2">
      <Logo />
      <div className="dark:hidden bg-neutral-100 w-[40px] h-[40px] rounded-xl flex items-center justify-center">
        <Image
          src="/images/icon-moon.svg"
          width={20}
          height={20}
          alt="Theme switcher"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            themeSwitch(theme);
          }}
        />
      </div>

      <div className="hidden bg-neutral-600 w-[40px] h-[40px] rounded-xl dark:flex justify-center items-center gap-x-2">
        <Image
          src="/images/icon-sun.svg"
          width={20}
          height={20}
          alt="Theme switcher"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            themeSwitch(theme);
          }}
        />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
