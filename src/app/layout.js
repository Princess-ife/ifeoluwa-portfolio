import { Jost, Caveat } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Ifeoluwa - Personal Portfolio",
  description: "Portfolio website showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
