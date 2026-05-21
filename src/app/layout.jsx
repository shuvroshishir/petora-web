import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Providers from "@/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Petora — Find Your Perfect Companion",
  description: "Find your perfect pet companion with Petora! Explore a wide range of pets, connect with shelters, and discover the joy of pet ownership. Your furry friend is just a click away!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.className} ${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <header>
            <NavBar />
          </header>
          <main className="min-h-screen bg-accent text-foreground flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
