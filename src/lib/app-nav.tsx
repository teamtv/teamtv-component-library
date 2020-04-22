import React from "react";
import { NavLink } from "react-router-dom";

export const AppNav: React.FC = () => (
  <nav>
    <NavLink className="mr-3" to="/livestreams" activeClassName="active">
      Live events
    </NavLink>
    <NavLink className="mr-3" to="/devices" activeClassName="active">
      Devices
    </NavLink>
    <NavLink className="mr-3" to="/destinations" activeClassName="active">
      Destinations
    </NavLink>
  </nav>
);
