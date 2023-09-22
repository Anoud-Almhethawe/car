"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="justify-between items-center gap-2 md:flex flex-wrap ">
        <p className="  text-black  md:text-xl">{session.user.name}</p>
        <button
          className="text-primary-blue rounded-full bg-white min-w-[130px]"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  } else
    return (
      <button
        className="text-primary-blue rounded-full bg-white min-w-[130px]"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    );
};

export default SigninButton;
