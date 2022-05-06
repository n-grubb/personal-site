import Layout from 'components/Layout'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/open-color.css'
import 'styles/tokens.css'
import 'styles/animations.css'
import 'styles/utils.css'
import 'styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
