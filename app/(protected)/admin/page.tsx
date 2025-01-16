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
    <Card className="mx-auto w-full max-w-[900px] bg-gradient-to-br from-slate-50 via-slate-50/90 to-slate-100/80 transition-all duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center justify-center space-x-3">
          <Shield className="h-6 w-6 text-slate-700 sm:h-8 sm:w-8" />
          <h2 className="text-xl font-semibold text-slate-700 sm:text-2xl">
            Admin Page
          </h2>
        </div>
        <p className="text-center text-xs text-slate-500 sm:text-sm">
          Manage and test administrative privileges
        </p>
      </CardHeader>
      <CardContent className="space-y-4 p-4 sm:space-y-6 sm:p-6">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <div className="rounded-lg text-center">
            <FormSuccess message="You have administrative access" />
          </div>
        </RoleGate>
        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-3 transition-all hover:bg-slate-50 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-medium text-slate-700">API Route Test</h3>
                <p className="text-xs text-slate-500 sm:text-sm">
                  Verify admin-only API endpoint access
                </p>
              </div>
              <Button
                onClick={onApiRouteClick}
                className="w-full bg-teal-500 transition duration-300 ease-in-out hover:bg-teal-400 sm:w-auto"
              >
                Test Access
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 transition-all hover:bg-slate-50 sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="font-medium text-slate-700">
                  Server Action Test
                </h3>
                <p className="text-xs text-slate-500 sm:text-sm">
                  Verify admin-only server action permissions
                </p>
              </div>
              <Button
                onClick={onServerActionClick}
                className="w-full bg-teal-500 transition duration-300 ease-in-out hover:bg-teal-400 sm:w-auto"
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
