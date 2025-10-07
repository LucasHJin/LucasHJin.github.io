import Header from './components/header.js'
import Footer from './components/footer.js';
import "./styling/globals.css"; // Applies global css to everything
import "./styling/layout.css"
import { Inter, Poppins, EB_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
});

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-garamond',
  display: 'swap',
});

export const metadata = {
  title: 'Lucas Jin',
  description: 'Portfolio of Lucas Jin, an aspiring software engineer at the University of Waterloo focused on building high-performance applications.',
  keywords: ['Lucas Jin', 'Portfolio', 'Developer', 'Software Engineer', 'Web Development', 'Robotics', 'Ottawa', 'Hackathons', 'Ontario', 'AI', "Waterloo", "Computer Science", "Startup"],
  author: 'Lucas Jin',
  openGraph: {
    type: 'website',
    title: 'Lucas Jin',
    description: 'Portfolio of Lucas Jin, an aspiring software engineer at the University of Waterloo focused on building high-performance applications.',
    url: 'https://lucasjin.co', 
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
      <body className={`${inter.className} ${garamond.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
