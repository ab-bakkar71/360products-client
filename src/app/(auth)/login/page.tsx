"use client";

import { LoginInput } from "@/interfaces/interfaces"; // আপনার ইন্টারফেস ফাইল থেকে টাইপ ইম্পোর্ট
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaUserCircle, FaLock } from "react-icons/fa";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter()

  const handleAutofill = (role: "user" | "admin") => {
    if (!formRef.current) return;

    const emailInput = formRef.current.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;
    const passwordInput = formRef.current.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement;

    if (emailInput && passwordInput) {
      if (role === "admin") {
        emailInput.value = "admin@360products.com";
        passwordInput.value = "Admin@12345";
      } else {
        emailInput.value = "user@360products.com";
        passwordInput.value = "User@12345";
      }

      emailInput.dispatchEvent(new Event("input", { bubbles: true }));
      passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData);

    const loginData: LoginInput = {
      email: userData.email as string,
      password: userData.password as string,
    };

    const { data, error } = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
    });
    if(error){
      toast.error(error.message)
    }
    else{
      toast.success('Login Successful!');
      router.push("/")

    }
    const { data:tokenData } = await authClient.token();
    console.log(tokenData);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section className="min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center bg-neutral-bg py-10">
      <div className="flex w-full flex-col items-center justify-center p-4">
        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#FF7E67] shadow-xl md:h-[320px] md:py-0">
          <h2 className="mb-4 text-4xl font-extrabold tracking-widest text-white md:mb-0">
            360Products
          </h2>

          <div className="absolute left-4 top-1/2 hidden h-66 w-66 -translate-y-1/2 lg:block">
            <Image
              src="https://i.ibb.co.com/S7wstFKH/photo-1542291026-7eec264c27ff-1.jpg"
              alt="Left Shoe"
              fill
              className="-rotate-12 object-contain"
              sizes="176px"
            />
          </div>
          <div className="absolute top-1/2 right-4 hidden h-44 w-44 -translate-y-1/2 lg:block">
            <Image
              src="https://i.ibb.co.com/fdzsFv0k/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Right Shoe"
              fill
              className="rotate-12 object-contain"
              sizes="176px"
              priority
            />
          </div>
        </div>

        <div className="relative -mt-30 w-full max-w-md bg-white p-8 shadow-xl rounded-global border border-gray-100">
          <h1 className="mb-2 text-3xl font-bold text-center text-primary">
            Welcome Back
          </h1>
          <p className="mb-6 text-xs text-center text-gray-400">
            Sign in to manage your premium catalog
          </p>

          <Form
            ref={formRef}
            validationBehavior="native"
            className="flex w-full flex-col gap-5"
            onSubmit={handleLogin}
          >
            {/* Email Input */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className=" text-xs font-medium">Email</Label>
              <Input
                placeholder="Enter your email"
                className=" text-black rounded-xl"
              />
              <FieldError className="text-rose-400 text-xs mt-1" />
            </TextField>

            {/* Password Input */}
            <TextField
              isRequired
              name="password"
              type={showPassword ? "text" : "password"}
            >
              <Label className="text-xs font-medium">Password</Label>
              <div className="relative flex items-center">
                <Input
                  placeholder="••••••••"
                  className="text-black rounded-xl w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-zinc-400 hover:text-white transition-colors focus:outline-none z-20 cursor-pointer"
                >
                  {showPassword ? (
                    <HiEyeOff className="w-5 h-5" />
                  ) : (
                    <HiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <FieldError className="text-rose-400 text-xs mt-1" />
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-semibold py-6 shadow-lg hover:bg-blue-500 transition-transform active:scale-[0.98] mt-2"
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Form>

          {/* 🔑 রিকোয়ারমেন্ট ৭: টেস্ট ক্রেডেনশিয়ালস অটোফিল বাটন গ্রুপ */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-center text-xs text-gray-400 font-medium mb-3">
              Quick Demo Autofill
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleAutofill("user")}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-200 text-xs font-semibold text-gray-600 rounded-global hover:bg-gray-50 transition active:scale-95 cursor-pointer"
              >
                <FaUserCircle className="text-sm text-secondary" />
                <span>Demo User</span>
              </button>
              <button
                type="button"
                onClick={() => handleAutofill("admin")}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 border border-gray-200 text-xs font-semibold text-gray-600 rounded-global hover:bg-gray-50 transition active:scale-95 cursor-pointer"
              >
                <FaLock className="text-sm text-accent" />
                <span>Demo Admin</span>
              </button>
            </div>
          </div>
        </div>

        {/* Redirect Link */}
        <p className="mt-8 text-sm text-gray-500 font-medium">
          Don't have an account yet?{" "}
          <Link
            href="/register"
            className="text-[#FF7E67] font-bold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
