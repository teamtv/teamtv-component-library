import React from "react";
import styles from "./index.module.scss";

const ViewHeader: React.FC = ({ children }) => {
  return <header className="page-header-content">{children}</header>;
};

export { ViewHeader };
