import useInput from "../../hooks/useInputValidation";
import classes from "../../styles/OrderForm.module.css";

const OrderForm = () => {
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim(""));

  const {
    value: enteredLastName,
    isValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim(""));
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameInputIsValid || !lastNameInputIsValid || !emailInputIsValid) {
      return;
    }

    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const nameInputError = nameInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const lastNameInputError = lastNameInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const emailInputError = emailInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["control-group"]}>
        <div className={`${nameInputError} ${classes.inputSection}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className={classes["error-text"]}>Name must not be empty</p>
          )}
        </div>
        <div className={`${lastNameInputError} ${classes.inputSection}`}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className={classes["error-text"]}>Last Name must not be empty</p>
          )}
        </div>
        <div className={`${emailInputError} ${classes.inputSection}`}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>
              Email must not be empty and include @
            </p>
          )}
        </div>
      </div>
      <div className={classes["form-actions"]}>
        <button className={classes.submitButton}>Submit</button>
      </div>
    </form>
  );
};

export default OrderForm;
