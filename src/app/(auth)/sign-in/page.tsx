/** @format */

"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#E8CFDA] flex items-center justify-center  overflow-hidden relative">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-white/15 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo dots */}
        <div className="flex gap-2 mb-6">
          <div className="w-5 h-5 rounded-full bg-[#8B3A3A]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B3A3A]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B3A3A]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8B3A3A]"></div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl font-bold text-[#8B3A3A] mb-2">
          Welcome to Beebeeh
        </h1>
        <p className="text-sm text-[#A85555] mb-6">
          Sign in to access your Beebeeh dashboard and continue your work.
        </p>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-[#8B3A3A] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-[#E8D5D8] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8B3A3A] focus:ring-1 focus:ring-[#8B3A3A]"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-[#8B3A3A]">
              Password
            </label>
            <a href="#" className="text-sm text-[#8B3A3A] hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#E8D5D8] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8B3A3A] focus:ring-1 focus:ring-[#8B3A3A]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-[#8B3A3A] hover:bg-[#7A3333] text-white font-semibold py-3 rounded-lg mt-6 mb-4 transition-colors">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-[#E8D5D8]"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-[#E8D5D8]"></div>
        </div>

        {/* Google Login */}
        <button className="w-full border border-[#E8D5D8] text-gray-700 font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Log in with Google
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-[#8B3A3A] font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
