import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <h1 className="text-center">{props.title}</h1>
      </div>
    </>
  );
};

export default Header;
