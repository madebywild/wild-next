import React from "react";
import { cx } from "~/features/styled";

export const Grid = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={cx(["grid w-full shrink-0 grid-cols-2 lg:grid-cols-12", className])} {...rest}>
      {children}
    </div>
  );
});

export const Col = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <div ref={ref} className={cx(["col-span-full", className])} {...rest}>
      {children}
    </div>
  );
});
