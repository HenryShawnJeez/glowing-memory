import Sidebar from "@/components/Sidebar";
import { Roboto } from "next/font/google";
import '../../globals.css';
import { Toaster } from 'sonner';

const roboto = Roboto({
    subsets: ["latin"],
    weight: "400",
  });
  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Sidebar />
        <section className="mainWidth bg-bgBlue">{children}</section>
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  )
}