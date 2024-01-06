import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebThin.woff2",
      style: "normal",
      weight: "100",
    },
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebLight.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebRegular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebMedium.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebBold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/iranYekan/IRANYekanWebBlack.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-yekan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${yekan.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-slate-100 dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
