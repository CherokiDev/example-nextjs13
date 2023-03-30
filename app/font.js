import { Space_Grotesk as SpaceGrotesk, ABeeZee } from '@next/font/google'

export const font = SpaceGrotesk({
  weights: ['400', '700'],
  subsets: ['latin']
})

export const font2 = ABeeZee({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abeezee'
})
