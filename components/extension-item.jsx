import Image from "next/image";
import React from "react";
import ToggleStatus from "./toggle/toggle-status";

function ExtensionItem({
  logo,
  name,
  description,
  isActive,
  onRemove,
  onToggle,
}) {
  return (
    <div className="w-[270px] h-[150px] mx-auto p-3 pb-4 flex flex-col justify-between border-neutral-200 dark:border-neutral-600 border-1 rounded-2xl bg-neutral-0 dark:bg-neutral-700">
      <div className="flex items-start gap-x-4">
        <Image
          src={logo}
          width={45}
          height={45}
          alt="Extension icon"
          className="inline-block"
        />
        <div className="inline-block">
          <h2 className="text-left text-neutral-700 dark:text-neutral-100 font-bold">
            {name}
          </h2>
          <p className="text-left text-neutral-600 dark:text-neutral-300 text-xs">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRemove(name)}
          className="px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300 font-bold border-neutral-300 hover:cursor-pointer hover:text-neutral-0 dark:hover:text-neutral-700 hover:border-red-500  hover:bg-red-500 focus:outline-1 outline-red-500 focus:ring-white dark:focus:ring-neutral-700 focus:ring-inset focus:ring-1 focus:border-white dark:focus:border-neutral-700 focus:bg-neutral-100/60 border-1 rounded-full"
        >
          Remove
        </button>

        <ToggleStatus isActive={isActive} onToggle={onToggle} name={name} />
      </div>
    </div>
  );
}

export default ExtensionItem;
