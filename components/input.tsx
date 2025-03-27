import { cl } from "@/utils/misc";
import { FC, HTMLProps } from "react";

export const Input: FC<
  {
    variant: "dark" | "light";
    onValueChange?: (val: string) => void;
  } & HTMLProps<HTMLInputElement>
> = ({ className, variant = "light", onValueChange, onChange, ...props }) => {
  const containerClass = cl(
    "text-md rounded-lg",
    { "bg-gray-800": variant === "dark" },
    { "bg-gray-100": variant === "light" },
    { "bg-gray-200": variant === "light" && props.disabled }
  );
  const inputClass = cl("py-2 px-2 w-full bg-transparent outline-none", {
    "text-white": variant === "dark",
  });
  return (
    <div className={containerClass}>
      <input
        className={inputClass}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.target.value);
        }}
        {...props}
      />
    </div>
  );
};
