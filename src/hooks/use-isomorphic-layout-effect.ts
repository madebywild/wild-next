import { useLayoutEffect, useEffect } from "react";
import { isClient } from "~/utils/common";

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
