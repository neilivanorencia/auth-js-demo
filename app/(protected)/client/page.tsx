"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { UserInfo } from "@/components/user-info";

import { BsPersonBadge } from "react-icons/bs";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <UserInfo
      user={user}
      label="Client Page"
      icon={<BsPersonBadge className="h-6 w-6 text-slate-700 sm:h-8 sm:w-8" />}
      description="Displays client information for some reference"
    />
  );
};

export default ClientPage;
