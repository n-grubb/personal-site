import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}
