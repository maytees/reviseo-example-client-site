import { Geist, Geist_Mono, Raleway, Manrope } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Script from "next/script"

const manropeHeading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
})

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        raleway.variable,
        manropeHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Script
        onLoad={() => {
          window.ReviseoConfig = {projectId: "6b6046dc-5750-4b3a-a5b8-113804dfb9b2"},
          function (e, t) {
            if (e.__Reviseo) return;
            e.__Reviseo = {};
            const i = t.createElement("script");
            i.src = "https://www.reviseo.app/reviseo.js";
            const n = t.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(i, n)
          }(window, document);
          }/>
      </body>
    </html>
  )
}
