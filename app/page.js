"use client";

import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./theme/theme-switcher";
import ExtensionItem from "@/components/extension-item";
import Menubar from "@/components/menubar";

import masterData from "@/data.json";

export default function Home() {
  const [extensions, setExtensions] = useState(masterData);
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("all");
  const [refresh, setRefresh] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (filter === "active") {
      setResult(extensions.filter((extension) => extension.isActive));
    } else if (filter === "inactive") {
      setResult(extensions.filter((extension) => !extension.isActive));
    } else {
      setResult(extensions);
    }
  }, [filter, refresh]);

  const handleRemove = (name) => {
    const updatedExtensions = extensions.filter(
      (extension) => extension.name !== name
    );
    setExtensions(updatedExtensions);
    setRefresh(!refresh);
  };

  const handleToggleStatus = (name) => {
    extensions.filter((extension) => {
      if (extension.name === name) {
        extension.isActive = !extension.isActive;
      }
    });
    setRefresh(!refresh);
  };

  const handelThemeChange = (theme) => {
    setTheme(theme);
  };

  return (
    <div
      className={`w-full h-fit min-h-dvh p-6 flex flex-col items-center gap-y-6 ${
        theme === "dark" ? "light-bg" : "dark-bg"
      }`}
    >
      <ThemeSwitcher themeSwitch={handelThemeChange} />
      <Menubar onClick={setFilter} />
      <div className="w-full max-w-[1536px] mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {result.map((extension, index) => (
          <ExtensionItem
            key={index}
            logo={extension.logo}
            name={extension.name}
            description={extension.description}
            isActive={extension.isActive}
            onRemove={handleRemove}
            onToggle={handleToggleStatus}
          />
        ))}
      </div>
    </div>
  );
}
