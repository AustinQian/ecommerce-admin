import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModelProvider } from "@/providers/model-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModelProvider/>
          {children}
        </body>
      </html>
    </ClerkProvider>

  );
}
