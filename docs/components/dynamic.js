import React from "react";
import { Tooltip } from "@material-ui/core";



export default function Dynamic() {
  return (
    <>
       <Tooltip title={<span style={{fontSize: "0.8rem"}}>Content on this page is dynamically updated.</span>} aria-label="add">
        <span className="emoji">🔮</span>
      </Tooltip>
    </>
  );
}
