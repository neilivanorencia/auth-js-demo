"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Input } from "@/components/ui/input";
import { ResetPassword } from "@/schemas";

import { resetPassword } from "@/actions/reset-password";

export const ResetPasswordForm = () => {
  const [error, SetError] = useState<string | undefined>("");
  const [success, SetSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof ResetPassword>>({
    resolver: zodResolver(ResetPassword),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetPassword>) => {
    startTransition(() => {
      SetError("");
      SetSuccess("");

      resetPassword(values, token).then((data) => {
        SetError(data?.error);
        SetSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your new password"
                      type="password"
                      className="border-2 border-mint-300 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-400" />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-[#448A9C] transition duration-500 ease-in-out hover:-translate-y-0.5 hover:bg-[#448A9C]/90 hover:shadow-lg hover:shadow-[#448A9C]/40 active:translate-y-0 active:bg-[#448A9C] active:shadow-none"
          >
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
