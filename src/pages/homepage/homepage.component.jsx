import React from "react";

import "./homepage.style.scss";
import Directory from "../../components/directory-menu/directory.component";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};
