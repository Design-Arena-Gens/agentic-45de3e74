import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "नेहा का मिशन | सिनेमैटिक स्टोरी",
  description:
    "नेहा और आदित्य की रोमांचक योजना पर आधारित एक सिनेमैटिक वेब अनुभव।"
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
