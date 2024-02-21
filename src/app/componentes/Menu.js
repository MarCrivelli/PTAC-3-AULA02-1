import Link from "next/link";
export default function Menu(){
    return(
        <header>
            <h1>Menu</h1>
                <nav>
                  <ul>
                    <Link href="/home">
                      <li>Início</li>
                    </Link>
                    <Link href="/registrar">
                      <li>Registro</li>
                    </Link>
                    <Link href="/constatar">
                      <li>Contatos</li>
                    </Link>
                  </ul>
                </nav>
        </header>
    )
}