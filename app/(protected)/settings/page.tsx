"use client";

import { signOut } from "next-auth/react";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = async () => {
    await signOut();
  };

  return (
    <div className="w-full max-w-[900px] rounded-xl bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 p-10 backdrop-blur-md">
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
