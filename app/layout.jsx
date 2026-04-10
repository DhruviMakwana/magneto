import "./globals.css";
import { Karla, Playfair_Display } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-karla",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
