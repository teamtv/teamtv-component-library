import React, { useEffect } from "react";
import ReactDOM from "react-dom";

let MODAL_OPEN_COUNTER: number = 0;

const Modal: React.FC<{
  onCloseClick: () => void;
}> = ({ onCloseClick, children }) => {
  useEffect(() => {
    const originalOnKeyDownHandler = document.body.onkeydown;
    const newOnKeyHandler = (e) => {
      e.stopImmediatePropagation();
    };

    if (MODAL_OPEN_COUNTER === 0) {
      const html = document.getElementsByTagName("html")[0];
      html.classList.add("modal-open");
      document.body.onkeydown = newOnKeyHandler;
    }
    MODAL_OPEN_COUNTER++;

    return () => {
      MODAL_OPEN_COUNTER--;
      if (MODAL_OPEN_COUNTER === 0) {
        const html = document.getElementsByTagName("html")[0];
        html.classList.remove("modal-open");
        document.body.onkeydown = originalOnKeyDownHandler;
      }
    };
  }, []);

  const contrastingCloseBtn = false;
  const size = "md";

  return (
    <div id="helper-div">
      {ReactDOM.createPortal(
        <div className={`modal ${size}`}>
          <div className="modal-dialog">
            {/* TODO FIX */}
            <div className="modal-content">
              <div
                className={`modal-close clickable ${
                  contrastingCloseBtn ? "modal-close-contrasting" : ""
                }`}
                onClick={onCloseClick}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              {children}
            </div>
          </div>
        </div>,
        document.getElementsByTagName("body")[0]
      )}
    </div>
  );
};

export { Modal };
