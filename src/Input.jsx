import { useState } from "react";
import "./Input.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
          // this field is only for confirm password , error
        }
        focused={focused.toString()}
        //focussed is helping to show errors only when user focuses out
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;