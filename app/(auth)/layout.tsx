const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center [background-image:radial-gradient(#ffffff33_1px,transparent_1px),linear-gradient(to_bottom_right,rgb(16_185_129),rgb(20_184_166),rgb(8_145_178))] [background-position:0_0,0_0] [background-size:16px_16px,100%_100%]">
      {children}
    </div>
  );
};

export default AuthLayout;
