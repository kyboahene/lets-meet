import React from "react";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <SignIn />
    </main>
  );
};

export default LoginPage;
