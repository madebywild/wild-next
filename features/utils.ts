import React from "react";
import { IS_CLIENT } from "~/constants";

/**
 * Use `useLayoutEffect` on the client and `useEffect` on the server.
 * @see https://react.dev/reference/react/useEffect
 * @see https://react.dev/reference/react/useLayoutEffect
 */
export const useIsoLayoutEffect = IS_CLIENT ? React.useLayoutEffect : React.useEffect;
