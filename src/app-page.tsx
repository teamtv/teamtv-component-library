import React from "react";

import { Page } from "page";
import { AppNav } from "app-nav";

export const AppPage = ({ insetChildren = <AppNav />, ...rest }) => (
  <Page insetChildren={insetChildren} {...rest} />
);
