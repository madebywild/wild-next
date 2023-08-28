import React from "react";
import { IS_CLIENT } from "~/constants";

export const useIsomorphicLayoutEffect = IS_CLIENT ? React.useLayoutEffect : React.useEffect;
