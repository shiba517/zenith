import '@styles/globals.css';
import Nav from '@components/Nav.jsx';
import Footer from '@components/Footer.jsx';
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Joga Bonito",
    description: "Play beautiful"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body className={inter.className}>
          <main>
            <Nav></Nav>
            { children }
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
    </html>
  );
}

export default RootLayout;
