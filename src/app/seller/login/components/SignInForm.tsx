"use client";

import { LoginCredentials } from "@/app/types/login";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignInForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordshow, setpasswordshow] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      ...credentials,
    });

    if (res?.error) {
      alert("Login failed!");
    } else {
      const session = await getSession();
      if (session?.user?.role === 1) {
        router.push("/dashboard/member");
      } else if (session?.user?.role === 2) {
        router.push("/dashboard/supplier");
      } else if (session?.user?.role === 3) {
        router.push("/dashboard/console");
      } else {
        alert("Unknown role!");
      }
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true); // Set loading to true while waiting for session
    const res = await signIn("google", { redirect: true });

    if (res?.error) {
      console.error("Google login error:", res.error);
      alert("Google login failed!");
      setLoading(false); // Set loading to false if login fails
    } else {
      // Wait for session to update with role
      const checkSession = async () => {
        const session = await getSession();
        if (session?.user?.role) {
          setLoading(false);
          if (session.user.role === 1) {
            router.push("/dashboard/member");
          } else if (session.user.role === 2) {
            router.push("/dashboard/supplier");
          } else if (session.user.role === 3) {
            router.push("/dashboard/console");
          } else {
            alert("Unknown role!");
          }
        } else {
          setTimeout(checkSession, 500); // Retry after 500ms if role not yet available
        }
      };
      checkSession();
    }
  };

  const isFormComplete = credentials.email && credentials.password;

  return (
    <div className=" bg-white rounded-sm p-8">
      <span className="text-xl font-medium">Login</span>

      <div className="mt-10">
        <div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="No. Handphone/Username/Email"
                  required
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  autoComplete="email"
                  className="block w-full border border-gray-300 rounded-sm py-2 px-4 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0"
                />
              </div>
            </div>

            <div>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type={passwordshow ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                    autoComplete="current-password"
                    className="block w-full border border-gray-300 rounded-sm py-2 px-4 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0"
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setpasswordshow(!passwordshow)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {!passwordshow ? (
                      <EyeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeSlashIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`w-full py-2 rounded-sm font-semibold text-white ${
                  isFormComplete ? "bg-[#F13C1F] hover:bg-[#E63B18]" : "bg-[#F5B7B1] cursor-not-allowed"
                }`}
                disabled={loading || !isFormComplete}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="text-gray-300">Processing....</span>
                  </>
                ) : (
                  <>LOG IN</>
                )}
              </button>
            </div>
          </form>
          <div className="mt-2 flex flex-col lg:flex-row lg:justify-between items-center">
            <Link href="#" className="text-custom-blue text-xs mb-2 lg:mb-0">
              Lupa Password?
            </Link>
            <Link href="#" className="text-custom-blue text-xs">
              Log in dengan no. handphone
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white px-6 text-custom-gray">ATAU</span>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-3 border border-gray-300 rounded-sm py-2 px-4 text-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-0"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-gray-600">Processing....</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">Google</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-2 items-center sm:justify-center text-xs">
          <span className="text-custom-gray">Baru di Shopee?</span>
          <Link href="/seller/signup" className="text-orange-500">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
