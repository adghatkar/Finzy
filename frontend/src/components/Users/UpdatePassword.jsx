import React from "react";
import { AiOutlineLock } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { changePasswordAPI } from "../../services/users/userService";
import { logoutAction } from "../../redux/slice/authSlice";
import AlertMessage from "../Alert/AlertMessage";

// Validation Schema
const validationSchema = Yup.object({
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});

const UpdatePassword = () => {
  // Dispatch
  const dispatch = useDispatch();
  // Mutation
  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: changePasswordAPI,
    mutationKey: ["change-password"],
  });

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    // Validations
    validationSchema,
    // Submit
    onSubmit: (values) => {
      mutateAsync(values.password)
        .then(() => {
          // Logout
          dispatch(logoutAction());
          // Remove the user from storage
          localStorage.removeItem("userInfo");
        })
        .catch((e) => console.log(e));
    },
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4 text-black">Change Your Password</h2>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2 text-black"
            htmlFor="new-password"
          >
            New Password
          </label>
          {isPending && <AlertMessage type="loading" message="Updating...." />}
          {isError && (
            <AlertMessage type="error" message={error.response.data.message} />
          )}
          {isSuccess && (
            <AlertMessage type="success" message="Password updated successfully" />
          )}
          <div className="flex items-center border-2 border-black py-2 px-3 rounded-md">
            <AiOutlineLock className="text-black mr-2" />
            <input
              id="new-password"
              type="password"
              name="newPassword"
              {...formik.getFieldProps("password")}
              className="outline-none flex-1 text-black"
              placeholder="Enter new password"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <span className="text-xs text-red-500">
              {formik.errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
