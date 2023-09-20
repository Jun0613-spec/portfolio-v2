import "./globals.css";
import { Raleway } from "next/font/google";

import { Provider } from "@/provider/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Jun",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
