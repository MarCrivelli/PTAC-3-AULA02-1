import Menu from './componentes/Menu' 
import Footer from './componentes/Footer'
import style from './style.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <Menu/>
        <Footer/>
      </body>
    </html>
  )
}
