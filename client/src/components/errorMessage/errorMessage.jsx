import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button/button";
import "./errorMessage.css";

export default function ErrorMessage({ errorText }) {
  const [value, setValue] = useState("true");
  const modalRoot = document.getElementById("modal-root");

  const onClose = () => {
    setValue("false");
  };

  if (value === "false") return null;
  return ReactDOM.createPortal(
    <section className="error-message">
      <div className="error-message__block">
        {errorText}{" "}
        <Button size="m" clickEvent={() => onClose()}>
          ×
        </Button>
      </div>
    </section>,

    modalRoot
  );
}
