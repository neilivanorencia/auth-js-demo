"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

import { ClockLoader } from "react-spinners";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const VerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

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
        <ClockLoader color="#22BFAC" />
      </div>
    </CardWrapper>
  );
};
