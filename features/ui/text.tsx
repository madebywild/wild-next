import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps, type MaybeAsChild } from "~/features/styled";

const styles = cva({
  base: "text-inherit",
  variants: {
    size: {
      small: "text-sm lg:text-base",
      large: "text-base lg:text-lg",
    },
  },
});

type Props = VariantProps<typeof styles>;

export const Text = React.forwardRef<HTMLElement, MaybeAsChild<Props, "span">>((props, ref) => {
  const { children, asChild, className, size, ...rest } = props;
  const Comp = asChild ? Slot : "span";

  return (
    <Comp ref={ref} className={styles({ size, className })} {...rest}>
      {children}
    </Comp>
  );
});
