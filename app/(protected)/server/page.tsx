import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

import { CiServer } from "react-icons/ci";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <UserInfo
      user={user}
      label="Server Page"
      icon={<CiServer className="h-6 w-6 text-slate-700 sm:h-8 sm:w-8" />}
      description="Displays server information for some reference"
    />
  );
};

export default ServerPage;
