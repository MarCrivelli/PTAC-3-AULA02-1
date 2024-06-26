import Link from "next/link";
import Image from "next/image"
export default function Menu(){
    return(
        <header>
          <div className="container">
          <div style={{ backgroundColor: 'white', display: 'inline-block', border:'3px solid #bb00ff',borderRadius: '50%', height: '150px', width: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px'}}>
            <Link href="https://www.ifms.edu.br">
              <Image
                width={100}
                height={100}
                src={"https://www.ifms.edu.br/marcaifms.png"}>
              </Image>
            </Link>
          </div>
          
            <div className="menu">
                  <nav>
                    <ul>
                      <Link style={{textDecoration: 'none', textAlign:'center'}} href="/">
                        <li>Início</li>
                      </Link>
                      <Link style={{textDecoration: 'none', textAlign:'center'}} href="/registrar">
                        <li>Registro</li>
                      </Link>
                      <Link style={{textDecoration: 'none', textAlign:'center'}} href="/constatar">
                        <li>Contatos</li>
                      </Link>
                    </ul>
                  </nav>
            </div>
          </div>
       </header>
    )
}