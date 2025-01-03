"use client";

import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full border-2 border-celadon-800 bg-transparent transition duration-500 ease-in-out  hover:bg-celadon-500/80 hover:shadow-lg hover:shadow-celadon-500/40 active:translate-y-0.5 active:shadow-none"
        onClick={() => {}}
      >
        <FcGoogle />
      </Button>
      <Button
        size="lg"
        className="w-full border-2 border-celadon-800 bg-transparent transition duration-500 ease-in-out  hover:bg-celadon-500/80 hover:shadow-lg hover:shadow-celadon-500/40 active:translate-y-0.5 active:shadow-none"
        onClick={() => {}}
      >
        <SiGithub color="black" />
      </Button>
    </div>
  );
};
