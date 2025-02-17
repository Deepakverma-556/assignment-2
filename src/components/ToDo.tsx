import React, { useState } from "react";
import CustomInput from "./common/CustomInput";

const ToDo = () => {
  const initialState = {
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };
  const [formValue, setFormValue] = useState(initialState);
  return (
    <div className="flex items-center justify-center">
      <form>
        <CustomInput
          customOnChange={(e: any) =>
            setFormValue({ ...formValue, firstName: e.target.value })
          }
          myValue={formValue.firstName}
          customType="text"
          customPlaceholder="First Name"
        />
      </form>
    </div>
  );
};

export default ToDo;
