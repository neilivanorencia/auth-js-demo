import { NavigationBar } from "./_components/navigation-bar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="fixed inset-0 [background-image:radial-gradient(#ffffff33_1px,transparent_1px),linear-gradient(to_bottom_right,rgb(16_185_129),rgb(20_184_166),rgb(8_145_178))] [background-position:0_0,0_0] [background-size:16px_16px,100%_100%]" />
      <main className="relative flex flex-1 flex-col items-center justify-center gap-y-4 overflow-y-auto px-4 py-4">
        <NavigationBar />
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
