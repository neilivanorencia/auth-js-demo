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
    <Card className="mx-8 w-[900px] overflow-hidden rounded-xl border-none bg-transparent p-0 shadow-lg transition duration-500 ease-in-out hover:shadow-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="relative hidden h-48 w-full sm:block md:h-auto md:w-1/2">
          <Image
            src="/city-background.png"
            alt="City Background"
            fill
            className="rounded-t-xl object-cover md:rounded-l-xl md:rounded-tr-none"
            priority
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70 backdrop-blur-md" />
          <div className="relative h-full rounded-b-xl border border-white/20 md:rounded-r-xl">
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
        </div>
      </div>
    </Card>
  );
};
