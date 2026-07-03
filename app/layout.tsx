import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { Header } from "@/components/Header";
import { company } from "@/data/company";
import "./globals.css";

const fontSyne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const fontDMSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fontDMMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Thiết kế & thi công công trình công nghiệp`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "thiết kế nhà xưởng",
    "xây dựng nhà xưởng",
    "kho lạnh",
    "phòng sạch",
    "cung cấp xe nâng",
    "thiết bị kho lạnh",
    "công trình công nghiệp",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: company.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fontSyne.variable} ${fontDMSans.variable} ${fontDMMono.variable}`}
    >
      <body className="min-h-[100dvh]">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}