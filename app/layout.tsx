import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full min-h-screen flex justify-center items-center bg-neutral-800 flex-col">
          <div className="w-[90%] rounded-md ">
          </div>
            <div className="w-[90%] min-h-[98vh]   rounded-md ">
            {children}
            </div>
        </main>
      </body>
    </html>
  );
}
