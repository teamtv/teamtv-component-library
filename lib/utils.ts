import { useHistory, useRouteMatch } from "react-router-dom";
// timeout using a promise
export const timeout = <T>(value: T, ms = 0) =>
  new Promise<T>(resolve => window.setTimeout(resolve, ms, value));

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

// TODO RelativeLink component
