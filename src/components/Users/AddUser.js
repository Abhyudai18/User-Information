import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        errorTitle: 'Invalid text',
        errorMessage: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        errorTitle: 'Invalid Age',
        errorMessage: 'Please enter a age (> 0).'
      });
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

  const errorHandler = () => {
    setError(null); // since null is a falsy value, it can be used to remove error message
  }

  return (
    <div>
    {error && <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} onConfirm={errorHandler}/>}
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
    </div>
  );
};

export default AddUser;
// value is a prop and is used for resetting the inputs
