"use client";

import { RegisterInput } from "@/interfaces/interfaces";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";

const registerPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handelRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const registerValues = Object.fromEntries(formData);

    if (registerValues.password !== registerValues.confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    const registerData: RegisterInput = {
      name: registerValues.name as string,
      email: registerValues.email as string,
      image: registerValues.image as string,
      password: registerValues.password as string,
    };

    const { data, error } = await authClient.signUp.email({
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
      image: registerData.image,
    });
    if (!error) {
      router.push("/login");
    } else {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Account created successfully!");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center bg-neutral-bg">
      <div className="flex w-full flex-col items-center justify-center bg-neutralBg p-4">
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
          <div className="absolute top-1/2 right-4 hidden -translate-y-1/2 lg:block">
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
        </div>

        <div className="relative -mt-30 w-full max-w-md bg-white p-8 shadow-xl rounded-global border border-gray-100">
          <h1 className="mb-4 text-3xl font-bold text-center text-primary">
            Create Your Account
          </h1>
          <Form
            validationBehavior="native"
            className="flex w-full flex-col gap-5"
            onSubmit={handelRegister}
          >
            {/* Full Name Input */}
            <TextField isRequired name="name" className="w-full">
              <Label className="text-xs font-medium">Full Name</Label>
              <Input
                placeholder="Enter Your Name"
                className="border border-zinc-800 text-black rounded-xl"
              />
              <FieldError className="text-rose-400 text-xs mt-1" />
            </TextField>

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

            {/* Image URL Field */}
            <TextField isRequired name="image" type="text">
              <Label className=" text-xs font-medium">Image URL</Label>
              <Input
                placeholder="https://example.com/avatar.jpg"
                className=" border border-zinc-800 text-black rounded-xl"
              />
              <FieldError className="text-rose-400 text-xs mt-1" />
            </TextField>

            {/* Password Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 8)
                    return "Password must be at least 8 characters";
                  if (!/[A-Z]/.test(value))
                    return "Password must contain at least one uppercase letter";
                  if (!/[0-9]/.test(value))
                    return "Password must contain at least one number";
                  return null;
                }}
              >
                <Label className=" text-xs font-medium">Password</Label>
                <div className="relative flex items-center">
                  <Input
                    placeholder="••••••••"
                    className=" border border-zinc-800 text-black rounded-xl w-full pr-10"
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

              {/* Confirm Password Field */}
              <TextField
                isRequired
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
              >
                <Label className=" text-xs font-medium">Confirm Password</Label>
                <div className="relative flex items-center">
                  <Input
                    placeholder="••••••••"
                    className=" border border-zinc-800 text-black rounded-xl w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 text-zinc-400 hover:text-white transition-colors focus:outline-none z-20 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <HiEyeOff className="w-5 h-5" />
                    ) : (
                      <HiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <FieldError className="text-rose-400 text-xs mt-1" />
              </TextField>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-6 shadow-lg hover:bg-blue-500 transition-transform active:scale-[0.98] mt-2"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form>
        </div>

        {/* Redirect Link */}
        <p className="mt-8 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#FF7E67] font-bold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default registerPage;
