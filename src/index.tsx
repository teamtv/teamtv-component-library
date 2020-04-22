import jQuery from "jquery";
import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "bootstrap";

import "lib/teamtv-components.scss"; // Import our scss file

ReactDOM.render(<div>test</div>, document.getElementById("root"));

(window as any).$ = jQuery;
