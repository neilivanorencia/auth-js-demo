import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

import { CiServer } from "react-icons/ci";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <UserInfo
      user={user}
      label="Server Page"
      icon={<CiServer className="h-10 w-10 text-slate-600" />}
    />
  );
};

export default ServerPage;
