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
  title: 'Lucas Jin',
  description: 'Portfolio of Lucas Jin, an aspiring software developer focused on building high-performance applications.',
  keywords: ['Lucas Jin', 'Portfolio', 'Developer', 'Software Engineer', 'Web Development', 'Robotics', 'Ottawa', 'Hackathons', 'Ontario'],
  author: 'Lucas Jin',
  openGraph: {
    type: 'website',
    title: 'Lucas Jin',
    description: 'Portfolio of Lucas Jin, an aspiring software developer focused on building high-performance applications.',
    url: 'https://lucasjin.biz', 
    image: '/LUCAS_PERSONAL_LOGO_NGE.png',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png'
  },
  manifest: '/site.webmanifest'
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
