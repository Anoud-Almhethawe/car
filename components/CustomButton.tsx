"use client";

import { CustomButtonProps } from "@/types";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyle,
  textStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button
          disabled={false}
          type={btnType || "button"}
          className={`custom-btn ${containerStyle}`}
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        ;
      </div>
    );
  }
  if (title === "Sign In")
    return (
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={() => signIn()}
      >
        Sign In
      </button>
    );

  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}> {title} </span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
