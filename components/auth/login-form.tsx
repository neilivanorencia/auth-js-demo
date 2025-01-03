import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome to this page"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      Login Page
    </CardWrapper>
  );
};
