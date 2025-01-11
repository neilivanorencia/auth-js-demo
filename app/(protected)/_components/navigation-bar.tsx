"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/server", label: "Server" },
    { href: "/client", label: "Client" },
    { href: "/admin", label: "Admin" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <nav className="w-full max-w-[900px] rounded-xl bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 p-2 text-slate-600 shadow-sm backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Mobile menu button with rotation animation */}
        <Button
          variant="ghost"
          className={`transition-transform duration-300 md:hidden ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "gradient" : "outline"}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>

        {/* User Button always visible */}
        <div className="md:ml-0">
          <UserButton />
        </div>
      </div>

      {/* Mobile navigation menu with slide and fade animation */}
      <div
        className={`transform overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 flex flex-col gap-2 md:hidden">
          {navItems.map((item, index) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "gradient" : "outline"}
              className={`w-full transform transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 75}ms`,
              }}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
