import React, { useState } from "react";

const Content = () => {
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    const textValue = document.getElementById("textArea").value;
    setInputText(textValue);
    console.log(inputText);
  };

  return (
    <>
      <div className="content">
        <button className="" onClick={handleClick}>
          Click Here
        </button>

        <h1>{inputText}</h1>

        <br />
        <br />
        <textarea
          name="textArea"
          id="textArea"
          cols="30"
          rows="10"
          className=""
        ></textarea>
      </div>
    </>
  );
};

export default Content;
