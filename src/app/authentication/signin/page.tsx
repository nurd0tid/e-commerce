import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign In | B2B Ecommerce",
    description: "Sign In to your account on B2B Ecommerce",
    icons: {
      icon: "/favicon.ico", // Path to your custom favicon
      shortcut: "/favicon.ico", // Optional: adds a shortcut icon
    },
  };
}
import React from "react";
import SignInForm from "./components/SignInForm";

const SignIn = () => {
  return <SignInForm />;
};

export default SignIn;
