"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className={`toaster group ${inter.className}`}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white/10 group-[.toaster]:backdrop-blur-xl group-[.toaster]:border group-[.toaster]:border-white/20 group-[.toaster]:shadow-lg group-[.toaster]:rounded-lg text-base transition-all duration-200 hover:group-[.toaster]:bg-white/15",
          description: "group-[.toast]:text-sm text-white/80",
          actionButton:
            "group-[.toast]:bg-white/20 group-[.toast]:backdrop-blur-sm group-[.toast]:text-white group-[.toast]:hover:bg-white/30 text-sm font-medium transition-colors",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:backdrop-blur-sm group-[.toast]:text-white/80 group-[.toast]:hover:bg-white/20 text-xs transition-colors",
          title: "group-[.toast]:text-white/90 font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
