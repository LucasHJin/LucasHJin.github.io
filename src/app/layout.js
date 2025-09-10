import "./styling/globals.css";
import Footer from "./components/footer";

export const metadata = {
  title: "Lucas Jin",
  description: "Lucas Jin's portfolio website. Computer Science at University of Waterloo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="dark"
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
