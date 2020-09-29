import React, { useState } from "react";
import style from "./main.module.css";

function Content() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ inputValue });
  };
  return (
    <>
      <div className={style.content}>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <h1>{inputValue}</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          dictum sit amet justo donec enim diam vulputate. Rhoncus mattis
          rhoncus urna neque. Vel fringilla est ullamcorper eget nulla facilisi
          etiam. Vitae congue mauris rhoncus aenean vel elit scelerisque. Risus
          ultricies tristique nulla aliquet enim. Mattis enim ut tellus
          elementum sagittis vitae et leo duis. In fermentum posuere urna nec.
          Amet est placerat in egestas erat.
        </div>
      </div>
    </>
  );
}

export default Content;
