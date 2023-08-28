import React from "react";
import { IS_CLIENT } from "~/constants";

/**
 * Isomorphic `useLayoutEffect`.
 *
 * Use `useLayoutEffect` on the client and `useEffect` on the server.
 */
export const useIsoLayoutEffect = IS_CLIENT ? React.useLayoutEffect : React.useEffect;
