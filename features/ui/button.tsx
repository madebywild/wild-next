import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps, type MaybeAsChild } from "~/features/styled";

const styles = cva({
  base: "inline-flex shrink-0 cursor-pointer items-center whitespace-nowrap disabled:cursor-default",
  variants: {
    intent: {
      primary: "border border-black bg-black text-white",
      secondary: "border border-black bg-white text-black",
    },
    size: {
      small: "px-4 py-2 text-sm",
      large: "px-6 py-3 text-lg",
    },
  },
});

type Props = VariantProps<typeof styles>;

export const Button = React.forwardRef<HTMLButtonElement, MaybeAsChild<Props, "button">>((props, ref) => {
  const { children, asChild, className, size = "small", intent = "primary", ...rest } = props;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp ref={ref} className={styles({ size, intent, className })} {...rest}>
      {children}
    </Comp>
  );
});
