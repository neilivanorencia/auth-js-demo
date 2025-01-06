import { BackButton } from "@/components/auth/back-button";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Header } from "@/components/auth/header";

import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Something went wrong"
      backButtonLabel="Go back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <div className="flex w-full items-center justify-center">
        <FaExclamationTriangle className="mx-auto h-8 w-8 text-slate-500" />
      </div>
    </CardWrapper>
  );
};
