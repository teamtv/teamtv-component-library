import jQuery from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";

import "./lib/page";

import "./lib/teamtv-components.scss"; // Import our scss file

ReactDOM.render(
  <div>
    <h2>Page</h2>
    <Page>test</Page>
  </div>,
  document.getElementById("root")
);

window.$ = jQuery;

$(function () {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
});
