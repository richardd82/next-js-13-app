import Navigation from '../components/Navigation.jsx'
import { SpaceGroteskFont } from './fonts.js'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with NextJs 13 😎</title>
      </head>
      <body className={SpaceGroteskFont.className}>        
        <Navigation />        
        {children}
      </body>
    </html>
  )
}
