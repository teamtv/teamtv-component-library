import React from "react";

import ErrorImg from "./images/error";
import NoContentImg from "./images/no-content";
import NoLicenseImg from "./images/no-license";
import RotateImg from "./images/rotate";

export const Placeholder = ({ children }: { children?: React.ReactNode }) => (
  <div className="placeholder-container">{children}</div>
);

export const PlaceholderDescription = ({
  children,
}: {
  children?: React.ReactNode;
}) => <p className="placeholder-description">{children}</p>;

export const PlaceholderError = () => (
  <Placeholder>
    <ErrorImg />
    <PlaceholderDescription>
      Some error occured. <a href="mailto:support@teamtv.nl">Contact us</a> for
      more info.
    </PlaceholderDescription>
  </Placeholder>
);

export const PlaceholderNoResults = ({
  children,
  description = "No results",
}: {
  children?: React.ReactNode;
  description?: string;
}) => (
  <Placeholder>
    {children ? children : <NoContentImg />}
    <PlaceholderDescription>{description}</PlaceholderDescription>
  </Placeholder>
);

export const PlaceholderNoLicense = () => (
  <Placeholder>
    <NoLicenseImg />
    <PlaceholderDescription>
      License expired. <a href="mailto:support@teamtv.nl">Contact us</a> for
      more info.
    </PlaceholderDescription>
  </Placeholder>
);

export const PlaceholderTurnScreen = () => (
  <Placeholder>
    <div style={{ animation: "rotate 2s infinite", width: "44px" }}>
      <RotateImg />
    </div>
    <PlaceholderDescription>
      Turn device to use this functionality.
    </PlaceholderDescription>
  </Placeholder>
);
