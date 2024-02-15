import '../styles.css'
import { Poppins } from 'next/font/google'

const defaultFont = Poppins({ weight: ['300', '400', '600', '800'], subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={defaultFont.className}>
            <Component {...pageProps} />
        </div>
    )
}
