import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { BASE_URLS } from "~/constants";
import { dedupe } from "~/features/utils";
import { cva, type VariantProps, type MaybeAsChild } from "~/features/styled";

const isInternalLink = (href: string) => {
  return href.startsWith("/") || BASE_URLS.some((url) => href.startsWith(url));
};

const maybeExtractInternalLink = (href: string) => {
  return isInternalLink(href) ? BASE_URLS.reduce((acc, str) => acc.replace(str, ""), href) : href;
};

const createNoOpener = (rel = "") => {
  return dedupe(["noopener", "noreferrer", ...rel.split(" ")])
    .join(" ")
    .trim();
};

const styles = cva({
  base: "cursor-pointer text-inherit no-underline",
  variants: {
    intent: {
      text: "underline",
    },
  },
});

type Props = VariantProps<typeof styles> &
  Omit<NextLinkProps, "href"> & {
    href?: NextLinkProps["href"];
    newWindow?: boolean;
  };

export const Link = React.forwardRef<HTMLAnchorElement, MaybeAsChild<Props, "a">>((props, ref) => {
  const {
    children,
    asChild,
    className,
    intent,
    newWindow,
    tabIndex: _tabIndex,
    href: _href,
    target: _target,
    rel: _rel,
    role: _role,
    ...rest
  } = props;

  const role = _role ?? !_href ? "button" : undefined;
  const target = _target ?? newWindow ? "_blank" : undefined;
  const rel = target === "_blank" ? createNoOpener(_rel) : _rel;
  const tabIndex = _tabIndex ?? role === "button" ? 0 : undefined;
  const href = _href ? maybeExtractInternalLink(_href) : undefined;

  const Comp = asChild ? Slot : href && isInternalLink(href) ? NextLink : "a";

  return (
    <Comp
      ref={ref}
      className={styles({ intent, className })}
      target={target}
      rel={rel}
      tabIndex={tabIndex}
      role={role}
      // @ts-expect-error - TS doesn't know that href will be defined if Comp is NextLink
      href={href}
      {...rest}
    >
      {children}
    </Comp>
  );
});
