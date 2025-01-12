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
      icon={<BsPersonBadge className="h-10 w-10 text-slate-600" />}
    />
  );
};

export default ClientPage;
