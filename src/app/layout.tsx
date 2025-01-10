import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Spiderverse",
  description: "Create a caroussel parallax of the Spiderverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu Options"
            width={36}
            height={25}
          />

          <Image
            src="/spider-logo.svg"
            alt="Spiderman Logo"
            width={260}
            height={70}
          />

          <Image src="/icons/user.svg" alt="User" width={36} height={30} />
        </header>

        {children}
      </body>
    </html>
  );
}
