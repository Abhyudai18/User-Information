import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      types={props.type || "button"}
      onclick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;

//in props.onclick, onclick can be any name
