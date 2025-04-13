import Header from './components/header.js'
import Footer from './components/footer.js';
import "./styling/globals.css"; // Applies global css to everything
import "./styling/layout.css"
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Lucas Jin - Developer Portfolio',
  description: 'Portfolio of Lucas Jin, an aspiring software developer focused on building high-performance applications.',
  keywords: ['Lucas Jin', 'Portfolio', 'Developer', 'Software Engineer', 'Web Development', 'Robotics'],
  author: 'Lucas Jin',
  openGraph: {
    type: 'website',
    title: 'Lucas Jin - Developer Portfolio',
    description: 'Portfolio of Lucas Jin, an aspiring software developer focused on building high-performance applications.',
    url: 'https://lucashjin.github.io', // REPLACE WITH ACTUAL SITE URL
    image: '/path/to/image.jpg', // REPLACE WITH ACTUAL LOGO/SITE IMAGE
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
