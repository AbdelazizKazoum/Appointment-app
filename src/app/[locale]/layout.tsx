import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Poppins } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '../globals.css'

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'E Certificat | Gendarmerie Royale',
  description: 'E Certificat | Gendarmerie Royale',
}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  const {
    children,
    params: { locale },
  } = props

  // Receive messages provided in `i18n.ts`
  const messages = useMessages()

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={poppins.className}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
