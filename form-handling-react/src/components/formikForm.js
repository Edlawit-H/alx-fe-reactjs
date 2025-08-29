import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("User Registered Successfully!");
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-4">
          <label className="block font-medium mb-1">Username:</label>
          <Field
            name="username"
            type="text"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Email:</label>
          <Field
            name="email"
            type="email"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Password:</label>
          <Field
            name="password"
            type="password"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-full transition-colors duration-200"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}
