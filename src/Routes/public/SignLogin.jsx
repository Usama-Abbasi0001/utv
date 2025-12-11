import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MainNavBar from "../../components/navbar/TopBar/MainNavBar";
import { useNavigate } from "react-router-dom";
import '../../../src/Routes/public/Signup.css'
/* ---------------- VALIDATION ---------------- */
const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
});

const SignUpSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Min 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

/* ---------------- MAIN COMPONENT ---------------- */
function SignLogin() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
         <div className="background">
      <MainNavBar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex gap-10 p-10 rounded-xl">

          {/* ================= SIGN IN ================= */}
          {isSignIn && (
            <div className="w-80 p-6 bg-black/30 rounded-lg text-white">
              <h2 className="text-center text-xl font-semibold mb-6">SIGN IN</h2>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    console.log("Sign In:", values);

                    // ✅ Navigate only after successful validation
                    navigate("/home");
                  }, 1500);
                }}
              >
                <Form className="space-y-4">
                  <FieldInput name="email" placeholder="Email" />
                  <FieldInput
                    name="password"
                    type="password"
                    placeholder="Password"
                  />

                  <button
                    type="submit"
                    className="w-full bg-purple-600 py-2 rounded"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "LOGIN"}
                  </button>

                  <div className="text-center text-sm">or</div>

                  <SocialButton
                    text="Continue with Google"
                    icon="https://www.svgrepo.com/show/475656/google-color.svg"
                    link="https://accounts.google.com"
                  />
                  <SocialButton
                    text="Continue with Instagram"
                    icon="https://www.svgrepo.com/show/475692/instagram-color.svg"
                    link="https://www.instagram.com"
                  />
                  <SocialButton
                    text="Continue with Facebook"
                    icon="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    link="https://www.facebook.com"
                  />

                  <p
                    onClick={() => setIsSignIn(false)}
                    className="text-center text-sm cursor-pointer underline"
                  >
                    Don’t have an account? Sign Up
                  </p>
                </Form>
              </Formik>
            </div>
          )}

          {/* ================= SIGN UP ================= */}
          {!isSignIn && (
            <div className="w-[400px] bg-black/30 p-6 rounded-lg text-white">
              <h2 className="text-center text-xl font-semibold mb-6">SIGN UP</h2>

              <Formik
                initialValues={{
                  name: "",
                  lastName: "",
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={SignUpSchema}
                onSubmit={(values) => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    console.log("Sign Up:", values);

                    // After signup, switch to login
                    setIsSignIn(true);
                  }, 2000);
                }}
              >
                <Form className="space-y-3">
                  <div className="flex gap-2">
                    <FieldInput name="name" placeholder="Name" />
                    <FieldInput name="lastName" placeholder="Last Name" />
                  </div>

                  <FieldInput name="username" placeholder="Username" />
                  <FieldInput name="email" placeholder="Email" />
                  <FieldInput name="password" type="password" placeholder="Password" />
                  <FieldInput
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                  />

                  <button
                    type="submit"
                    className="w-full bg-purple-600 py-2 rounded"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "SIGN UP"}
                  </button>

                  <p
                    onClick={() => setIsSignIn(true)}
                    className="text-center text-sm cursor-pointer underline"
                  >
                    Already have an account? Sign In
                  </p>
                </Form>
              </Formik>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- FIELD INPUT ---------------- */
const FieldInput = ({ name, placeholder, type = "text" }) => (
  <div>
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded bg-white text-black"
    />
    <ErrorMessage name={name} component="div" className="text-red-400 text-sm" />
  </div>
);

/* ---------------- SOCIAL BUTTON ---------------- */
const SocialButton = ({ text, icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-white text-black py-2 rounded flex items-center justify-center gap-3 text-sm hover:bg-gray-200 transition"
  >
    <img src={icon} alt="" className="w-5 h-5" />
    {text}
  </a>
);

export default SignLogin;
