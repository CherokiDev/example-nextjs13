import '../styles/globals.css'
import Header from '../components/Header'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Aplicación de ejemplo usando Next 13</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
