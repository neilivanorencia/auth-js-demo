import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return <div>{JSON.stringify(session, null, 2)}</div>;
};

export default SettingsPage;
