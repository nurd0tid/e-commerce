import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUp = () => {
  return (
    <div style={{ backgroundColor: "rgb(206, 50, 2)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex mx-auto max-w-7xl">
          <div className="hidden sm:block flex-1">
            <img src="/background-login.png" className="w-auto h-full" />
          </div>
          <div className="pb-8 pt-8 lg:w-1/3 content-center sm:pb-0 sm:pt-0">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
