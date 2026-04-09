import "./globals.css";
import { Karla } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-karla",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
