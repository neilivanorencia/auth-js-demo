import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExtendedUser } from "@/next-auth";
import { User2, Mail, Shield, Fingerprint, ShieldCheck } from "lucide-react";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
  icon?: React.ReactNode;
  description: string;
}

export const UserInfo = ({ user, label, icon, description }: UserInfoProps) => {
  return (
    <Card className="w-full max-w-[900px] bg-gradient-to-br from-sky-50 via-teal-50/90 to-emerald-50/80 transition duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="space-y-4 p-6">
        <div className="flex items-center justify-center space-x-3">
          {icon}
          <p className="text-xl font-semibold text-slate-700 sm:text-2xl">
            {label}
          </p>
        </div>
        <p className="text-center text-xs text-slate-500 sm:text-sm">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          {/* ID Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
              <Fingerprint className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">ID</span>
            </div>
            <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
              <span className="font-mono text-xs text-slate-800 md:text-sm">
                {user?.id}
              </span>
            </div>
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
              <User2 className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Name</span>
            </div>
            <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.name}
              </span>
            </div>
          </div>

          {/* Email Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
              <Mail className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Email</span>
            </div>
            <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.email}
              </span>
            </div>
          </div>

          {/* Role Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
              <Shield className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Role</span>
            </div>
            <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.role}
              </span>
            </div>
          </div>

          {/* 2FA Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
              <ShieldCheck className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">
                Two-Factor Authentication
              </span>
            </div>
            <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
              <Badge
                variant={user?.isTwoFactorEnabled ? "default" : "destructive"}
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-xs font-normal md:text-sm"
              >
                {user?.isTwoFactorEnabled ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
