"use client";

import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full border-2 border-mint-500 bg-transparent shadow-none transition duration-500 ease-in-out hover:bg-celadon-500/80 hover:shadow-lg hover:shadow-celadon-500/40 active:translate-y-0.5 active:shadow-none"
        onClick={() => onClick("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        size="lg"
        className="w-full border-2 border-mint-500 bg-transparent shadow-none transition duration-500 ease-in-out hover:bg-celadon-500/80 hover:shadow-lg hover:shadow-celadon-500/40 active:translate-y-0.5 active:shadow-none"
        onClick={() => onClick("github")}
      >
        <SiGithub color="black" />
      </Button>
    </div>
  );
};
