import type { Metadata } from "next";
import { roboto, brygada } from "@/lib/fonts";
import "./globals.css";
import { Toaster } from "sonner";
import { Web3Modal } from "@/context/Web3Modal";


export const metadata: Metadata = {
  title: "IOV",
  description:
    "Claim IOV, Swap IOV, Live Carlive Chain (IOV) Price, Historical Chart & Carlive Chain Market Cap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body
          className={`bg-bgBlue text-sm text-textWhite ${roboto.variable} ${brygada.variable}`}>
          <Web3Modal>{children}</Web3Modal>
          <Toaster richColors position="top-center" closeButton />
        </body>
      </html>
  );
}
