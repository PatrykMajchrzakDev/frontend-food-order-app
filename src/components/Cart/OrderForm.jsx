import { useRef, useState } from "react";
import useInput from "../../hooks/useInputValidation";
import classes from "../../styles/OrderForm.module.css";

const OrderForm = (props) => {
  const [isFormsValid, setisFormsValid] = useState(true);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const {
    value: enteredName,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim(""));

  const {
    value: enteredCity,
    isValid: cityInputIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: cityInputReset,
  } = useInput((value) => value.trim(""));
  const {
    value: enteredEmail,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredStreet,
    isValid: streetInputIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: streetInputReset,
  } = useInput((value) => /\d/.test(value));
  const {
    value: enteredPostalCode,
    isValid: postalCodeInputIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: postalCodeInputReset,
  } = useInput((value) => value.trim("") && value.length === 5);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !nameInputIsValid ||
      !cityInputIsValid ||
      !emailInputIsValid ||
      !postalCodeInputIsValid ||
      !streetInputIsValid
    ) {
      setisFormsValid(false);
      return;
    }
    setisFormsValid(true);

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;

    props.onSubmit({
      name: enteredName,
      email: enteredEmail,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });

    nameInputReset();
    cityInputReset();
    emailInputReset();
    postalCodeInputReset();
    streetInputReset();
  };

  const nameInputError = nameInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const cityInputError = cityInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const emailInputError = emailInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const streetInputError = streetInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  const postalCodeInputError = postalCodeInputHasError
    ? `${classes.invalid} ${classes["form-control"]}`
    : classes["form-control"];
  return (
    <form onSubmit={formSubmitHandler} className={classes.formSection}>
      {/* ====== NAME ====== */}
      <div className={classes["control-group"]}>
        <div className={`${nameInputError} ${classes.inputSection}`}>
          <label htmlFor="name" className={classes.inputLabel}>
            Full Name:
          </label>
          <input
            ref={nameInputRef}
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

        {/* ====== EMAIL ====== */}
        <div className={`${emailInputError} ${classes.inputSection}`}>
          <label htmlFor="email" className={classes.inputLabel}>
            E-Mail Address:
          </label>
          <input
            ref={emailInputRef}
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

        {/* ====== STREET ====== */}
        <div className={`${streetInputError} ${classes.inputSection}`}>
          <label htmlFor="street" className={classes.inputLabel}>
            Street:
          </label>
          <input
            ref={streetInputRef}
            type="text"
            id="street"
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
            value={enteredStreet}
          />
          {streetInputHasError && (
            <p className={classes["error-text"]}>
              Make sure it is full street name with a number
            </p>
          )}
        </div>

        {/* ====== CITY ====== */}
        <div className={`${cityInputError} ${classes.inputSection}`}>
          <label htmlFor="city" className={classes.inputLabel}>
            City:
          </label>
          <input
            ref={cityInputRef}
            type="text"
            id="city"
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={enteredCity}
          />
          {cityInputHasError && (
            <p className={classes["error-text"]}>
              Nazwa miasta nie może być pusta
            </p>
          )}
        </div>

        {/* ====== POSTAL CODE ====== */}
        <div className={`${postalCodeInputError} ${classes.inputSection}`}>
          <label htmlFor="postalCode" className={classes.inputLabel}>
            Postal Code:
          </label>
          <input
            ref={postalCodeInputRef}
            type="number"
            id="postalCode"
            onChange={postalCodeChangeHandler}
            onBlur={postalCodeBlurHandler}
            value={enteredPostalCode}
          />
          {postalCodeInputHasError && (
            <p className={classes["error-text"]}>
              Kod pocztowy składa się tylko z 5 cyfr
            </p>
          )}
        </div>
      </div>
      <div className={classes["form-actions"]}>
        <button className={classes.submitButton}>Submit</button>
        {!isFormsValid && (
          <p className={classes["error-text"]}>*All forms must be filled</p>
        )}
      </div>
    </form>
  );
};

export default OrderForm;
