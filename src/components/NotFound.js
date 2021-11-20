import React from "react";
import { MdEnhancedEncryption } from "react-icons/md";
import { BiMessageError } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="carrierNotFound" /* style={{ textAlign: "center", marginTop: "100px" }} */>
      <h5 className="h1NotFound" style={{ fontSize: "60px", color: "rgb(192, 0, 128" }}>
        <span
          className="span_one"
           >
          <BiMessageError className="icon_notfound"/>
        </span>
        <span className="span_two" >
           
        </span>
      </h5>

      <div className="notfound_2">
        <p>We are sorry.</p>
        <p>We couldn't find anything.</p>
        <p>You may wish to click on our logo to continue.</p>
      </div>
    </div>
  );
}
