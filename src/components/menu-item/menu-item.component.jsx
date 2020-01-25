import React from "react";
import "./menu-item.style.scss";

export const MenuItem = ({ title, key, imageUrl, size }) => {
  return (
    <div key={key} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Buy Now</span>
      </div>
    </div>
  );
};
