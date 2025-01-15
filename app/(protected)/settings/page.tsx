"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCurrentUser } from "@/hooks/use-current-user";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { settings } from "@/actions/settings";
import { SettingsSchema } from "@/schemas";
import { Switch } from "@/components/ui/switch";
import { UserRole } from "@prisma/client";

import { IoSettingsOutline } from "react-icons/io5";

const SettingsPage = () => {
  const user = useCurrentUser();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  const commonFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter name",
    },
  ];

  const nonOAuthFields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      placeholder: "Enter new password",
    },
  ];

  return (
    <Card className="w-full max-w-[900px] bg-gradient-to-br from-sky-50 via-teal-50/90 to-emerald-50/80 transition duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center justify-center space-x-3">
          <IoSettingsOutline className="h-6 w-6 sm:h-8 sm:w-8" />
          <h2 className="text-xl font-semibold text-slate-700 sm:text-2xl">
            Settings
          </h2>
        </div>
        <p className="text-center text-xs text-slate-500 sm:text-sm">
          Manage and modify set of information
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0.5">
            {commonFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as any}
                render={({ field: formField }) => (
                  <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
                    <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
                      <FormLabel className="text-xs font-medium md:text-sm">
                        {field.label}
                      </FormLabel>
                    </div>
                    <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
                      <FormControl>
                        <Input
                          {...formField}
                          placeholder={field.placeholder}
                          type={field.type}
                          disabled={isPending}
                          className="border-slate-200 text-xs text-slate-800 md:text-sm"
                        />
                      </FormControl>
                    </div>
                  </div>
                )}
              />
            ))}

            {!user?.isOAuth &&
              nonOAuthFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name as any}
                  render={({ field: formField }) => (
                    <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
                      <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
                        <FormLabel className="text-xs font-medium md:text-sm">
                          {field.label}
                        </FormLabel>
                      </div>
                      <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
                        <FormControl>
                          <Input
                            {...formField}
                            placeholder={field.placeholder}
                            type={field.type}
                            disabled={isPending}
                            className="border-slate-200 text-xs text-slate-800 md:text-sm"
                          />
                        </FormControl>
                      </div>
                    </div>
                  )}
                />
              ))}

            <FormField
              control={form.control}
              name="role"
              render={({ field: formField }) => (
                <div className="grid grid-cols-1 gap-y-1 rounded-lg transition-colors hover:bg-slate-50/50 md:grid-cols-2 md:gap-y-0">
                  <div className="flex items-center gap-x-2 p-1.5 text-slate-600 md:p-3">
                    <FormLabel className="text-xs font-medium md:text-sm">
                      Role
                    </FormLabel>
                  </div>
                  <div className="rounded-md bg-white/80 p-1.5 md:rounded-none md:bg-transparent md:p-3">
                    <Select
                      disabled={isPending}
                      onValueChange={formField.onChange}
                      defaultValue={formField.value}
                      value={formField.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-slate-200 text-xs text-slate-800 md:text-sm">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value={String(UserRole.ADMIN)}>
                          Admin
                        </SelectItem>
                        <SelectItem value={String(UserRole.USER)}>
                          User
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </div>
                </div>
              )}
            />

            <div className="border-b px-4 py-3">
              <FormField
                control={form.control}
                name="isTwoFactorEnabled"
                render={({ field }) => (
                  <div className="flex items-center justify-between">
                    <div>
                      <FormLabel className="text-sm font-medium text-slate-600">
                        Two Factor Authentication
                      </FormLabel>
                      <FormDescription className="text-xs text-slate-500">
                        Enable 2FA for enhanced security
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        disabled={isPending}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                )}
              />
            </div>

            <div className="mt-6 space-y-4">
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-teal-500 transition duration-300 ease-in-out hover:bg-teal-400"
              >
                Save changes
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
