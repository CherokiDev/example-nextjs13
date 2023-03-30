import '../styles/globals.css'
import Header from '../components/Header'
import { font } from './font'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Aplicación de ejemplo usando Next 13</title>
      </head>
      <body className={font.className}>
        {/* <body className={font.variable}> */}
        <Header />
        {children}
      </body>
    </html>
  )
}
