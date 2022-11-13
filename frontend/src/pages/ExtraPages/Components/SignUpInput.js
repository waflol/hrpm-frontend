import React, { useState } from "react";
import { Input, FormFeedback } from "reactstrap";

const SignUpInput = (props) => {
  const [valid, setValid] = useState(false);
  const { id, type, classname, errorMessage, ...inputProps } = props;

  const onChange = (e) => {
    console.log(e.target);
    if (e.target.value === "1") {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <Input
        id={id}
        {...inputProps}
        type={type}
        invalid={(type !== "radio" && id !== "addressInput") ? valid : false}
        onChange={(e) => onChange(e)}
        className={classname}
      />
      <FormFeedback invalid>{errorMessage}</FormFeedback>
    </div>
  );
};

export default SignUpInput;
