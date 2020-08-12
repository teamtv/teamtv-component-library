import { useEffect, useRef } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
// timeout using a promise
export const timeout = <T>(value: T, ms = 0) =>
  new Promise<T>((resolve) => window.setTimeout(resolve, ms, value));

export const useGoToRelative = () => {
  const match = useRouteMatch();
  const history = useHistory();

  return (path: string | number, state?: any) => () => {
    if (!match) {
      console.error("match not set!");
      throw new Error("useGoToRelative: match not set!");
    }

    const completePath =
      path.toString().length > 0 ? `${match.path}/${path}` : match.path;

    return history.push(completePath, state);
  };
};

export const formatEuro = (cents: number): string => {
  const centsStr = cents.toString();

  return `€ ${centsStr.slice(0, -2)},${centsStr.slice(-2)}`;
};

/**
 * Concrete types like HTMLDivElement don't inherit from HTMLElement.
 * Cast the return value like this:
 *
 * const ref = useScrollIntoView() as React.RefObject<HTMLDivElement>;
 *
 * Instead of doing the casting here and taking the type as a generic I think
 * it's better to do at the point of use as it will be more explicit.
 */
export const useScrollIntoView = (): React.RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const { current } = ref;

    if (current !== null) {
      current.scrollIntoView();
    }

    return () => {};
  }, []);

  return ref;
};

// TODO RelativeLink component
