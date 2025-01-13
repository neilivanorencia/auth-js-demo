"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FormSuccess } from "@/components/form-success";
import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { admin } from "@/actions/admin";
import { Shield } from "lucide-react";

export const AdminPage = () => {
  const onApiRouteClick = async () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route Access");
      } else {
        toast.error("Forbidden API Route Access");
      }
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }
      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  return (
    <Card className="w-full max-w-[900px] bg-gradient-to-br from-slate-50 via-slate-50/90 to-slate-100/80 transition-all duration-300 ease-in-out hover:shadow-lg">
      <CardHeader className="space-y-4 p-6">
        <div className="flex items-center justify-center space-x-3">
          <Shield className="h-8 w-8 text-slate-700" />
          <h2 className="text-2xl font-semibold text-slate-700">
            Admin Dashboard
          </h2>
        </div>
        <p className="text-center text-sm text-slate-500">
          Manage and test administrative privileges
        </p>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <div className="rounded-lg bg-emerald-50 p-4 text-center">
            <FormSuccess message="You have administrative access" />
          </div>
        </RoleGate>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-slate-700">API Route Test</h3>
                <p className="text-sm text-slate-500">
                  Verify admin-only API endpoint access
                </p>
              </div>
              <Button
                onClick={onApiRouteClick}
                className="bg-slate-800 hover:bg-slate-700"
              >
                Test Access
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 transition-all hover:bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-slate-700">
                  Server Action Test
                </h3>
                <p className="text-sm text-slate-500">
                  Verify admin-only server action permissions
                </p>
              </div>
              <Button
                onClick={onServerActionClick}
                className="bg-slate-800 hover:bg-slate-700"
              >
                Test Access
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
