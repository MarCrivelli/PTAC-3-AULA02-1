import Menu from './componentes/Menu';
import Footer from './componentes/Footer';
import style from './style.css';
import Home from './componentes/Home';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Menu/>
        <div className="paginaPadrao">
          {children}
          <Home/>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
