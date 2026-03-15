import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DocsShell } from "@/components/DocsShell";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurrra Docs",
    template: "%s — Aurrra Docs",
  },
  description:
    "Learn how to use Aurrra — the AI-powered content engine for researching, writing, and producing video content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('docs-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.add('light')}}catch(e){document.documentElement.classList.add('light')}})()`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#121212] text-fg dark:text-[#FAFAFA] font-body antialiased transition-colors">
        <ThemeProvider>
          <ScrollToTop />
          <DocsShell>{children}</DocsShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
