import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign Up | B2B Ecommerce",
    description: "Sign Up to your account on B2B Ecommerce",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return <SignUpForm />;
};

export default SignUp;
