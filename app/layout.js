import { Noto_Sans } from "next/font/google";
import ThemeProvider from "./theme/theme-provider";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Browser extensions manager UI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon/icon.png"
          sizes="32x32"
          type="image/png"
        />
      </head>
      <body
        className={`${notoSans.variable} antialiased bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
