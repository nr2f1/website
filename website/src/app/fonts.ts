import { Nunito_Sans } from 'next/font/google';

// One definition for the locale layout, the error page and the not-found
// page, so every document gets the same @font-face and CSS variable.
export const nunitoSans = Nunito_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});
