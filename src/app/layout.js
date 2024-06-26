import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://cyberstudio.vercel.app/"),

  openGraph: {
    title: "Cyberstudio",
    description: "El mejor estudio fotográfico",
    images: [
      {
        url: "https://raw.githubusercontent.com/karenfggutierrez/Images/main/cyberstudio/HomePage.PNG",
        width: 800,
        heigh: 600,
        alt: "Cyberstudio"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}