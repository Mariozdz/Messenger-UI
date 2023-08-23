import Toggle from "@/components/common/toggle";
import { LoginForm } from "@/components/containers/forms/authentication/login/login-form";
import { SignUpForm } from "@/components/containers/forms/authentication/sign-up-form";
import { useState } from "react";

function LoginPage() {
  const [isLoginAccessMode, setIsLoginAccessMode] = useState(true);

  return (
    <div className="flex flex-row h-screen w-screen bg-black">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full bg-gray-100">
        <p className="text-lg font-semibold mb-10">
          Login or SignUp to continue
        </p>
        <Toggle onChangeValue={setIsLoginAccessMode} initialValue />
      </div>
      <div className="flex relative justify-center items-center w-full md:w-1/2 h-full ">
        {/* Login form */}

        <div className="flex md:hidden absolute top-10 w-full items-center justify-center ">
          <Toggle onChangeValue={setIsLoginAccessMode} initialValue />
        </div>

        <div
          className={`absolute transition-all duration-1000 p-10 ${
            isLoginAccessMode ? "opacity-100 delay-500 z-30" : "opacity-0 z-0"
          }`}
        >
          <LoginForm />
        </div>

        <div
          className={`absolute transition-all duration-1000 p-10 ${
            !isLoginAccessMode ? "opacity-100 delay-500 z-30" : "opacity-0 z-0"
          }`}
        >
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
