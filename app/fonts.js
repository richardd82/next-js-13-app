import { Poppins, Space_Grotesk } from "@next/font/google"

export const PoppinsFont = Poppins({
  weight: '400',
  subsets: ['latin'], 
  variable: '--Poppins'//Variable que se puede utilizar dentro de un CSS
})
export const SpaceGroteskFont = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
  variable: '--SpaceGrotesk'//Variable que se puede utilizar dentro de un CSS
})