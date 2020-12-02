import { useEffect, useState } from "react";
import { isClient } from "~/utils/common";

interface Props {
  query: string;
  defaultState?: boolean | null;
}

const getMatch = (query: string) => {
  return window.matchMedia(query);
};

const parseQueryString = (query: string) => {
  return query.replaceAll("@media only screen and", "").trim();
};

export const useMediaQuery = ({ query, defaultState = null }: Props) => {
  const parseAndMatch = (s: string) => getMatch(parseQueryString(s));
  const [state, setState] = useState(isClient ? () => parseAndMatch(query).matches : defaultState);

  useEffect(() => {
    let mounted = true;
    const mql = parseAndMatch(query);

    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    mql.addEventListener("change", onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};
