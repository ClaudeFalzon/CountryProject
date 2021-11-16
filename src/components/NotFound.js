import React from "react";
import { MdEnhancedEncryption } from "react-icons/md";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1 style={{ fontSize: "60px", color: "rgb(192, 0, 128" }}>
        <span
          className="span_one"
           >
          <MdEnhancedEncryption className="icon_notfound"/>
        </span>
        <span className="span_two" >
           We are sorry.
        </span>
      </h1>

      <div className="notfound_2">
        <h2>There's no content. We couldn't find anything.</h2>
        <h2>You may wish to click on our logo to retry.</h2>
      </div>
    </div>
  );
}
