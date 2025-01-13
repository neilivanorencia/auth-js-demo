import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExtendedUser } from "@/next-auth";
import { User2, Mail, Shield, Fingerprint, ShieldCheck } from "lucide-react";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
  icon?: React.ReactNode;
}

export const UserInfo = ({ user, label, icon }: UserInfoProps) => {
  return (
    <Card className="w-full max-w-[900px] bg-gradient-to-br from-sky-50 via-teal-50/90 to-emerald-50/80 transition duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="flex flex-row items-center justify-center gap-x-2 p-2 md:p-5">
        {icon}
        <p className="text-center text-lg font-normal text-slate-800">
          {label}
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          {/* ID Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 md:p-3 p-1.5 text-slate-600">
              <Fingerprint className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">ID</span>
            </div>
            <div className="rounded-md bg-white/80 md:p-3 p-1.5 md:rounded-none md:bg-transparent">
              <span className="font-mono text-xs text-slate-800 md:text-sm">
                {user?.id}
              </span>
            </div>
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 md:p-3 p-1.5 text-slate-600">
              <User2 className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Name</span>
            </div>
            <div className="rounded-md bg-white/80 md:p-3 p-1.5 md:rounded-none md:bg-transparent">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.name}
              </span>
            </div>
          </div>

          {/* Email Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 md:p-3 p-1.5 text-slate-600">
              <Mail className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Email</span>
            </div>
            <div className="rounded-md bg-white/80 md:p-3 p-1.5 md:rounded-none md:bg-transparent">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.email}
              </span>
            </div>
          </div>

          {/* Role Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 md:p-3 p-1.5 text-slate-600">
              <Shield className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">Role</span>
            </div>
            <div className="rounded-md bg-white/80 md:p-3 p-1.5 md:rounded-none md:bg-transparent">
              <span className="text-xs text-slate-800 md:text-sm">
                {user?.role}
              </span>
            </div>
          </div>

          {/* 2FA Row */}
          <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
            <div className="flex items-center gap-x-2 md:p-3 p-1.5 text-slate-600">
              <ShieldCheck className="h-5 w-5 text-teal-500" />
              <span className="text-xs font-medium md:text-sm">
                Two-Factor Authentication
              </span>
            </div>
            <div className="rounded-md bg-white/80 md:p-3 p-1.5 md:rounded-none md:bg-transparent">
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
