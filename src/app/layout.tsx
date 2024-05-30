import "@/styles/globals.css";

import { Playfair_Display_SC } from "next/font/google"

import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: "Anti Racism - by Ethan Pelletier",
  description: "Created by Ethan Pelletier",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Playfair_Display_SC({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} bg-[#100505]`}>
      <body className="bg-[#100505]">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
