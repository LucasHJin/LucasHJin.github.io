import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Applies global css to everything

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>

        </header>
        {children}
      </body>
    </html>
  );
}
