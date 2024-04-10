import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
