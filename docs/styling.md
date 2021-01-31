# Styling

This project uses [TailwindCSS](https://tailwindcss.com/) and [styled-components](https://styled-components.com/docs) using the [twin.macro](https://github.com/ben-rogerson/twin.macro/#features) plugin.

### Basic

Use the `tw` prop when there are no conditional styles, and you don't need custom CSS.<br />**This should always be preferred!**

```tsx
/**
 * We still need to import the macro, because it provides the custom JSX transform
 * that enables the `tw` prop. If no import is present, the compiler will default to
 * react-jsx, which does not know how to handle the `tw` prop.
 */
import "twin.macro";

return () => (
  <div tw="flex w-full">
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </div>
);
```

### Custom CSS

If you need to add custom CSS to an element, you can use the `styled` utility.

```tsx
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex w-full`}
  -webkit-tap-highlight-color: transparent;
`;

return () => (
  <Wrapper>
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </Wrapper>
);
```

### Nesting styles

Styled-components support nesting just like SCSS does. Nested styles are scoped by their parent element. Depending on the use case, it can make sense to use nested CSS instead of creating multiple styled-components!

```tsx
import tw, { styled } from "twin.macro";

const Button = styled.button`
  ${tw`block`}

  > i {
    ${tw`block w-10 h-10`}
  }

  > span {
    ${tw`text-blue-500`}
  }
`;

return () => (
  <Button>
    <i>Icon</i>
    <span>Label</span>
  </Button>
);
```

### Element casting

Sometimes you have a styled-component that is used in different places with different semantic meaning.

```tsx
import tw, { styled } from "twin.macro";

const Headline = styled.h1`
  ${tw`font-bold`}
`;

return () => (
  <>
    <Headline>I am a H1</Headline>
    <Headline as="h2">I am a H2 with the same style!</Headline>
  </>
);
```

### Styling with props & conditional styles

Sometimes you want to style a component differently based on its props.

Note that conditional styles come with a cost. Prefer static styles when possible and avoid props that change very often! If you have such a use-case (i.e. changing an element's position frequently), consider using the `style` prop instead (or even better: use framer-motion or GSAP).

```tsx
import tw, { styled } from "twin.macro";

interface WrapperProps {
  backgroundColor?: string;
}

const Wrapper = styled.div<WrapperProps>`
  ${tw`flex w-full`}
  background-color: ${(props) => props.backgroundColor || "red"};
`;

return () => (
  <Wrapper backgroundColor="blue">
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </Wrapper>
);
```

If you need to add conditional CSS and/or more than a single prop, consider using an array.

```tsx
import tw, { styled } from "twin.macro";

interface WrapperProps {
  backgroundColor?: string;
  isHidden?: boolean;
  isHighlighted?: boolean;
}

const Wrapper = styled.div<WrapperProps>((props) => [
  // Common styles first
  tw`flex w-full`,
  // Prefer booleans to ternaries
  props.isHidden && tw`hidden`,
  props.isHighlighted && tw`text-red-500`,
  // Custom styles last
  // Don't forget to add a semicolon! Normal CSS rules apply.
  `background-color: ${props.backgroundColor || "red"};`,
  `-webkit-tap-highlight-color: transparent;`,
]);

return () => (
  <Wrapper isHighlighted={true} backgroundColor="blue">
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </Wrapper>
);
```

### Style variants

Sometimes you want different style variants based on a prop instead of just changing a single CSS value. Consider using a `Record` in combination with a default value for the variant.

```tsx
import tw, { styled, TwStyle } from "twin.macro";

type WrapperVariant = "light" | "dark" | "crazy";

interface WrapperProps {
  variant?: WrapperVariant;
}

const wrapperVariants: Record<WrapperVariant, TwStyle> = {
  light: tw`bg-white text-black`,
  dark: tw`bg-black text-white`,
  crazy: tw`bg-green-400 text-yellow-200`,
};

const Wrapper = styled.div<WrapperProps>`
  ${tw`flex w-full`}
  ${({ variant = "dark" }) => wrapperVariants[variant]}
`;

return () => (
  <Wrapper variant="crazy">
    <div tw="w-1/2" />
    <div tw="w-1/2" />
  </Wrapper>
);
```

### Overriding styles

You can use the `tw` prop to override styles for a styled-component.

```tsx
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`bg-black text-white`}
`;

return () => (
  // I will have a red text.
  <Wrapper tw="text-red-500" />
);
```

### Composing styles

Sometimes simply overriding a rule doesn't cut it. That's when you can use styled-component's composition feature. Note that composing comes with a cost, and you should **avoid** complex composing!

```tsx
import tw, { styled } from "twin.macro";

const Wrapper = styled.div`
  ${tw`bg-black text-white`}
`;

// Extending the base wrapper one time is fine.
const BlueWrapper = styled(Wrapper)`
  ${tw`bg-blue`}
`;
const RedWrapper = styled(Wrapper)`
  ${tw`bg-red text-black`}
`;

// But extending it again and again is not recommended.
const RedWrapperBold = styled(RedWrapper)`
  ${tw`font-bold`}
`;
const RedWrapperBoldItalic = styled(RedWrapperBold)`
  ${tw`font-italic`}
`;

return () => (
  <>
    <Wrapper />
    <BlueWrapper />
    <RedWrapper />
  </>
);
```

### Media queries

While you should use Tailwind's screen class utilities most of the time, sometimes you need to use a media query the traditional way. This is when you can use the utilities in `~/utils/screens`. These functions take one (or two) Tailwind screen keys as argument and return a media-query string.

```tsx
import tw, { styled } from "twin.macro";
import { up, down, only, between } from "~/utils/screens";

const Wrapper = styled.div`
  /* This is what you usually want */
  ${tw`bg-black lg:bg-red`}

  /* Desktop and up */
  ${up("lg")} {
    -webkit-tap-highlight-color: transparent;
  }

  /* Only desktop */
  ${only("lg")} {
    -webkit-tap-highlight-color: transparent;
  }

  /* Everything between tablet and desktop */
  ${between("md", "lg")} {
    -webkit-tap-highlight-color: transparent;
  }

  /* Mobile and down */
  ${down("sm")} {
    -webkit-tap-highlight-color: transparent;
  }
`;

return () => <Wrapper />;
```

If you need to programmatically check the active media query, you can use the hook in `~/hooks/useMediaQuery`.

```tsx
import { up, between } from "~/utils/screens";
import { useMediaQuery } from "~/hooks/useMediaQuery";

// I work with all "screen" variants!
const isUpLg = useMediaQuery(up("lg"));
const isBetweenLgAndXl = useMediaQuery(between("lg", "xl"));

// By default the hook will fall back to `false` if `window` is `undefined` (iE during SSR).
// You can overwrite this behavior by passing a second parameter with the desired fallback value.
const isUpLg = useMediaQuery(up("lg"), true);
```

### Theme

Sometimes you may need to access a value from your Tailwind theme directly. You can use the `theme` utility.

```tsx
import { theme } from "twin.macro";

const blue500 = theme("colors.blue.500");

// I can also be typed!
type Screen = "sm" | "md" | "lg" | "xl" | "2xl" | "max";
const screens = theme<Record<Screen, string>>("screens");
```

### Global styles

Global styles are declared in `~/styles/GlobalStyles.tsx`. The same rules apply!

### Custom fonts

This project includes `Inter` as an example font. Follow this steps to add your own font:

- Add font files to the `public` directory
- Create font-face rules in `~/styles/fonts.css`
- Preload new fonts in `~/pages/__app.tsx`
- Add font name to Tailwind config `tailwind.config.js`

Note that adding custom font-face declarations directly into `~/styles/GlobalStyles.tsx` is [not recommended](https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering).
