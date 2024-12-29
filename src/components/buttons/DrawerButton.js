import React from "react";

function DrawerButton({ children, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default DrawerButton;
