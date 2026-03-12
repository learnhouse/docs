import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/react'
import Logo from '../components/Logo/Logo'

export const metadata = {
  title: {
    default: 'LearnHouse Docs',
    template: '%s – LearnHouse Docs',
  },
  description: 'The next-gen open source learning software',
  metadataBase: new URL('https://docs.learnhouse.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.learnhouse.app',
    siteName: 'LearnHouse Docs',
    images: [
      {
        url: 'https://docs.learnhouse.app/img/og.png',
        alt: 'LearnHouse Docs',
        width: 1512,
        height: 687,
      },
    ],
  },
  twitter: {
    creator: '@getlearnhouse',
    site: '@getlearnhouse',
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicons/apple-touch-icon.png',
  },
  manifest: '/favicons/site.webmanifest',
}

const navbar = <Navbar logo={<Logo />} projectLink="https://github.com/learnhouse/learnhouse" chatLink="https://discord.gg/CMyZjjYZ6x" />
const footer = <Footer>MIT {new Date().getFullYear()} © LearnHouse.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/learnhouse/docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
        >
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
