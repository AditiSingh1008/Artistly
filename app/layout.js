import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artistly | Book Performing Artists",
  description: "Find, connect, and hire singers, DJs, speakers and dancers.",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" suppressHydrationWarning className="transition-colors duration-500 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
