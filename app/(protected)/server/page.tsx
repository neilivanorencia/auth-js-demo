import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

import { CiServer } from "react-icons/ci";

const ServerPage = async () => {
  const user = await currentUser();

  return (
    <UserInfo
      user={user}
      label="Server Page"
      icon={<CiServer className="h-8 w-8 text-slate-600" />}
      description="Displays server information for some reference"
    />
  );
};

export default ServerPage;
