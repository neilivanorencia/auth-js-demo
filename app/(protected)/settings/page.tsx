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
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { settings } from "@/actions/settings";
import { SettingsSchema } from "@/schemas";

import { IoSettingsOutline } from "react-icons/io5";

const SettingsPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
          if (data?.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Card className="mx-auto w-full max-w-[900px] bg-gradient-to-br from-slate-50 via-slate-50/90 to-slate-100/80 transition-all duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="space-y-4 p-4 sm:p-6">
        <div className="flex items-center justify-center space-x-3">
          <IoSettingsOutline className="h-6 w-6 text-slate-700 sm:h-8 sm:w-8" />
          <h2 className="text-xl font-semibold text-slate-700 sm:text-2xl">
            Settings
          </h2>
        </div>
        <p className="text-center text-xs text-slate-500 sm:text-sm">
          Manage and modify set of information
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Edit name here"
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" disabled={isPending}>
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
