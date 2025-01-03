"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import Image from "next/image";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="mx-8 flex w-[800px] flex-col rounded-xl border-none shadow-lg outline-none transition duration-500 ease-in-out hover:shadow-2xl md:flex-row">
      <div className="relative h-48 w-full md:h-auto md:w-1/2">
        <Image
          src="/city-background.png"
          alt="City Background"
          fill
          className="rounded-t-xl object-cover md:rounded-l-xl md:rounded-tr-none"
          priority
        />
      </div>
      <div className="w-full md:w-1/2">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </div>
    </Card>
  );
};
