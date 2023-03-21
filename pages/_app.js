import { Layout } from '../components/Layout'
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Layout>

      
        <Component {...pageProps} />
        </Layout>
    </main>
    )
}

export default MyApp
