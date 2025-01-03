import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl font-semibold text-slate-700 drop-shadow-md md:text-3xl">
        Auth.js Demo
      </h1>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
};
