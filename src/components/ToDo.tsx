"use client";
import React, { FormEvent, useState } from "react";
import CustomInput from "./common/CustomInput";
import { TABLE_HEADING_LIST } from "@/app/utils/helper";

const ToDo = () => {
  const initialState = {
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [myArray, setMyArray] = useState([]);
  const [formValue, setFormValue] = useState(initialState);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const emailRegax = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  function submitHandler(e: any) {
    e.preventDefault();
    setError(true);
    setEmailError(false);

    const emailExists = myArray.some(
      (item: any) => item.email === formValue.email
    );

    if (emailExists) {
      setEmailError(true);
      return;
    }
    if (
      formValue.firstName != "" &&
      formValue.email.length > 0 &&
      emailRegax.test(formValue.email) &&
      formValue.phone.length === 10 &&
      formValue.password.length >= 6 &&
      formValue.confirmPassword === formValue.password
    ) {
      setError(false);
      setFormValue(initialState);
      setMyArray([...myArray, formValue] as any);
    }
  }
  function deleteHandler(index: number) {
    const newArray = [...myArray];
    newArray.splice(index, 1);
    setMyArray(newArray);
  }
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <form className="flex flex-col gap-3">
        <div>
          <CustomInput
            customOnChange={(e: any) =>
              setFormValue({ ...formValue, firstName: e.target.value })
            }
            myValue={formValue.firstName}
            customType="text"
            customPlaceholder="First Name"
          />
          {error && formValue.firstName === "" && (
            <p className="text-red-500">first name is required</p>
          )}
        </div>
        <div>
          <CustomInput
            customOnChange={(e: any) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
            myValue={formValue.email}
            customType="email"
            customPlaceholder="Email"
          />
          <p className="text-red-500">
            {error && formValue.email.length === 0
              ? "email is Required"
              : !emailRegax.test(formValue.email) && formValue.email.length > 0
              ? "email is invalid"
              : ""}
          </p>
        </div>
        <div>
          <CustomInput
            customOnChange={(e: any) =>
              setFormValue({ ...formValue, phone: e.target.value })
            }
            myValue={formValue.phone}
            customType="number"
            customPlaceholder="Phone"
          />
          <p className="text-red-500">
            {error && formValue.phone.length === 0
              ? "phone number is required"
              : formValue.phone.length > 0 && formValue.phone.length != 10
              ? "number must be 10 digit"
              : ""}
          </p>
        </div>
        <div className="relative">
          <CustomInput
            customOnChange={(e: any) =>
              setFormValue({ ...formValue, password: e.target.value })
            }
            myValue={formValue.password}
            customType={showPassword ? "text" : "password"}
            customPlaceholder="Password"
            myClass="!pr-10"
          />
          <p
            className="cursor-pointer absolute right-2 top-2 text-xs"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </p>
          <p className="text-red-500">
            {error && formValue.password.length === 0
              ? "password is required"
              : formValue.password.length < 6 && formValue.password.length > 0
              ? "password at least 6 characters"
              : ""}
          </p>
        </div>
        <div className="relative">
          <CustomInput
            customOnChange={(e: any) =>
              setFormValue({ ...formValue, confirmPassword: e.target.value })
            }
            myValue={formValue.confirmPassword}
            customType={showConfirmPassword ? "text" : "password"}
            customPlaceholder="Confirm Password"
            myClass="!pr-10"
          />
          <p
            className="cursor-pointer absolute right-2 top-2 text-xs"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "hide" : "show"}
          </p>
          <p className="text-red-500">
            {error && formValue.password != formValue.confirmPassword
              ? "password not match"
              : ""}
          </p>
        </div>
        <button
          onClick={submitHandler}
          className="px-3 border border-black rounded-lg"
        >
          Submit
              </button>
              {emailError && <p className="text-red-500">Email already use</p>}
      </form>
      <div className="flex overflow-x-auto w-full">
        <table className="border border-black mx-auto max-w-[700px] max-lg:min-w-[700px] w-full mt-6">
          <thead>
            <tr className="text-left">
              {TABLE_HEADING_LIST.map((obj, i) => (
                <th key={i} className="border border-black px-2 py-1">
                  {obj}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {myArray.map((item: any, index: number) => (
              <tr key={index}>
                <td className="border border-black py-1 px-2">
                  {item.firstName}
                </td>
                <td className="border border-black py-1 px-2">{item.email}</td>
                <td className="border border-black py-1 px-2">{item.phone}</td>
                <td className="border border-black py-1 px-2">
                  {item.password}
                </td>
                <td className="border border-black py-1 px-2">
                  <button
                    className="text-red-500"
                    onClick={() => deleteHandler(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
