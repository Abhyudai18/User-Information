import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName(""); // resetting
    setEnteredUserAge(""); // resetting
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (in Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge}
          onChange={userageChangeHandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
// value is a prop and is used for resetting the inputs
