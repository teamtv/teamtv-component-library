import React, { ReactNode } from "react";
import "./index.scss";

// NOTE: behaviour is handle by regular bootstrap / jQuery scripting
// it probably doesn't support dynamic title/child rendering, rerender
// parent instead
const ContentTabs: React.FC<any> = ({ children, titles }) => {
  let initialActiveIdx = 0;
  return (
    <div className="content-tabs">
      <ul className="nav nav-tabs" role="tablist">
        {titles.map((title: string, idx: number) => (
          <li key={idx} className="nav-item">
            <a
              className={`nav-link ${idx === initialActiveIdx ? "active" : ""}`}
              id={`tab-${idx}`}
              data-toggle="tab"
              href={`#content-${idx}`}
              role="tab"
              aria-controls={`content-${idx}`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {children.map((content: ReactNode, idx: number) => (
          <div
            key={idx}
            className={`tab-pane fade show ${
              idx === initialActiveIdx ? "active" : ""
            }`}
            id={`content-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export { ContentTabs };
