import React from "react";
import "./Chat.css";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

export default function Chat({ user, page }) {
  return (
    <div className="chat">
      <div style={{ height: page.height }} className="chat__background" />

      <div className="chat__header">
        {page.isMobile && (
          <IconButton>
            <ArrowBack />
          </IconButton>
        )}
      </div>
    </div>
  );
}
