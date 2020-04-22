import React from "react";

import { Page } from "lib/page";
import { AppNav } from "lib/app-nav";

export const AppPage = ({ insetChildren = <AppNav />, ...rest }) => (
  <Page insetChildren={insetChildren} {...rest} />
);
