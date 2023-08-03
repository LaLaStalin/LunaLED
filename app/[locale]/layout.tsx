import {
  Navbar,
  NavbarContact,
  ThemeMuiProvider,
  ReduxProvider,
  Footer,
} from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeContextProvider } from "@/context/theme";

export const metadata: Metadata = {
  title: "LunalED",
  description: "Website for LED",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className="relative light 
        bg-backgroundLight 
        dark:bg-backgroundDark 
        text-text-primaryLight 
        dark:text-text-primaryDark
        font-roboto
      "
      >
        <ThemeContextProvider>
          <ThemeMuiProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ReduxProvider>
                <NavbarContact />
                <Navbar />
                {children}
                <Footer />
              </ReduxProvider>
            </NextIntlClientProvider>
          </ThemeMuiProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
