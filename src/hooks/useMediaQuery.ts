import { useEffect, useState } from "react";
import { isClient } from "~/utils/common";

const getMatch = (query: string) => {
  return window.matchMedia(query);
};

const parseQueryString = (query: string) => {
  return query.replaceAll("@media only screen and", "").trim();
};

export const useMediaQuery = (query: string, defaultState = false) => {
  const parseAndMatch = (s: string) => getMatch(parseQueryString(s));
  const [state, setState] = useState(isClient ? () => parseAndMatch(query).matches : defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = parseAndMatch(query);

    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange); // iOS 13 and below
    }

    setState(mql.matches);

    return () => {
      mounted = false;

      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
      } else {
        mql.removeListener(onChange); // iOS 13 and below
      }
    };
  }, [query]);

  return state;
};
