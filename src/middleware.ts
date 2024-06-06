import createMiddleware from 'next-intl/middleware'

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['fr', 'ar'],

  // Default locale if no match
  defaultLocale: 'fr',
})

export default middleware

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|ar)/:path*'],
}
