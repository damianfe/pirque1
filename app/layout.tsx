import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {Toaster} from'react-hot-toast'
import ActiveSectionContextProvider from "@/context/active-section-context";

const montserrat = Montserrat({ subsets: ["latin"], weight:["500","600"] });

export const metadata: Metadata = {
  title: "Disfruta | pirque",
  description: "Bienvenidos a Disfrute Pirque para eventos inolvidables. Reserva ahora y vive la magia de Pirque.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-sky-200`}>
        <ActiveSectionContextProvider>
        {children}
        <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}