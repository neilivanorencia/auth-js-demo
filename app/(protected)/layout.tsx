import { NavigationBar } from "./_components/navigation-bar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-10 px-4 [background-image:radial-gradient(#ffffff33_1px,transparent_1px),linear-gradient(to_bottom_right,rgb(16_185_129),rgb(20_184_166),rgb(8_145_178))] [background-position:0_0,0_0] [background-size:16px_16px,100%_100%]">
      <NavigationBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
