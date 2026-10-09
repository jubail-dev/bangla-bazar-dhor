"use client";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { router } from "better-auth/api";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (data.password !== data.confirmPassword) {
      toast.danger("পাসওয়ার্ড এবং নিশ্চিত পাসওয়ার্ড মিলছে না");
      return;
    }

    const { data: resData, error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.danger("সাইন আপ করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
      return;
    }
    if (resData) {
      toast.success("সাইন আপ সফল হয়েছে!");
      router.push("/");
    }
  };


  return (
    <div className="min-h-screen bg-[#f1f4f2] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          অ্যাকাউন্ট তৈরি করুন
        </h1>
        <p className="text-sm text-gray-600">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200/80 p-8 shadow-sm">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name Field */}
          <TextField
            isRequired
            name="name"
            type="text"
            className="flex flex-col gap-1.5 text-left"
          >
            <Label className="text-sm font-semibold text-gray-800">নাম</Label>
            <Input
              placeholder="যেমন: রহিম উদ্দিন"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#04783d]/30 focus:border-[#04783d] transition-all placeholder:text-gray-400"
            />
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5 text-left"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "সঠিক ইমেইল ঠিকানা প্রদান করুন";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-800">ইমেইল</Label>
            <Input
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#04783d]/30 focus:border-[#04783d] transition-all placeholder:text-gray-400"
            />
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="flex flex-col gap-1.5 text-left"
            validate={(value) => {
              if (value.length < 8) {
                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
              }
              return null;
            }}
          >
            <Label className="text-sm font-semibold text-gray-800">
              পাসওয়ার্ড
            </Label>
            <Input
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#04783d]/30 focus:border-[#04783d] transition-all placeholder:text-gray-400"
            />
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          {/* Confirm Password Field */}
          <TextField
            isRequired
            name="confirmPassword"
            type="password"
            className="flex flex-col gap-1.5 text-left"
          >
            <Label className="text-sm font-semibold text-gray-800">
              পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <Input
              placeholder="আবার লিখুন"
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#04783d]/30 focus:border-[#04783d] transition-all placeholder:text-gray-400"
            />
            <FieldError className="text-xs text-red-500 mt-0.5" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-2 bg-[#04783d] hover:bg-[#036232] text-white font-medium py-3 rounded-lg text-base transition-colors shadow-sm cursor-pointer"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Button>
        </Form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-3 text-xs text-gray-500 font-medium">
            অথবা
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Authentication Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Google Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-800 rounded-lg py-2 px-2 hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-800 rounded-lg py-2 px-2 hover:bg-gray-50 transition-colors text-xs font-bold text-gray-900"
          >
            <svg
              className="w-4 h-4 fill-current text-gray-900"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Existing Account Link */}
        <p className="text-center text-sm text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <a
            href="#"
            className="text-[#04783d] underline font-medium hover:text-[#036232]"
          >
            সাইন ইন করুন
          </a>
        </p>
      </div>

      {/* Back to Home Link */}
      <a
        href="#"
        className="mt-6 text-sm text-gray-600 hover:text-gray-900 underline transition-colors"
      >
        ← হোম পেজে ফিরে যান
      </a>
    </div>
  );
};

export default SignUpPage;
