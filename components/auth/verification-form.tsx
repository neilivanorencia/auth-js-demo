"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { verification } from "@/actions/verification";

import { ClockLoader } from "react-spinners";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token not found");
      return;
    }
    verification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Verification"
      backButtonLabel="Go back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <div className="flex w-full items-center justify-center">
        {!success && !error && <ClockLoader color="#22BFAC" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
