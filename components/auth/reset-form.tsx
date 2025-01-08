"use client";

import * as z from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
import { LoginSchema } from "@/schemas";

import { login } from "@/actions/login";

export const ResetForm = () => {
  const [error, SetError] = useState<string | undefined>("");
  const [success, SetSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      SetError("");
      SetSuccess("");

      login(values).then((data) => {
        SetError(data?.error);
        SetSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Forgot Password?"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-600">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      type="email"
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
            Send Reset Link
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
