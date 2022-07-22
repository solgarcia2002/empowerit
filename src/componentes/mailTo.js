import React from "react";

function Mailto({ email, subject, body, ...props }) {
    return (
      <a className="a-mail" href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

export default Mailto;