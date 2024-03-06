import Link from "next/link";
export default function NotFound(){
    return(
        <div class="alinhamentoDoError">
            <svg aria-label="Erro" fill="none" height="50" role="img" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><linearGradient gradientUnits="userSpaceOnUse" id="a" x1="15.8742" x2="31.8526" y1="40.6539" y2="16.3003"><stop offset=".166667" stop-color="#ffd600"></stop><stop offset=".385417" stop-color="#ff7a00"></stop><stop offset=".609375" stop-color="#ff0169"></stop><stop offset=".838542" stop-color="#d300c5"></stop></linearGradient><path d="m1 9h48" stroke="rgb(245, 245, 245)" stroke-width="2"></path><g fill="rgb(245, 245, 245)"><circle cx="5" cy="5" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="13" cy="5" r="1"></circle></g><rect height="48" rx="3" stroke="rgb(245, 245, 245)" stroke-width="2" width="48" x="1" y="1"></rect><path clip-rule="evenodd" d="m21.536 20c1.5396-2.6667 5.3886-2.6667 6.9282 0l6.9282 12c1.5396 2.6667-.3849 6-3.4641 6h-13.8564c-3.0792 0-5.0037-3.3333-3.4641-6zm5.1961 1c-.7698-1.3333-2.6943-1.3333-3.4641 0l-6.9282 12c-.7698 1.3333.1925 3 1.7321 3h13.8564c1.5396 0 2.5018-1.6667 1.732-3z" fill="url(#a)" fill-rule="evenodd"></path><path d="m24.083 24.9965c-.0447-.5364.3787-.9965.917-.9965s.9617.4601.917.9965l-.3755 4.5052c-.0234.2817-.2589.4983-.5415.4983s-.5181-.2166-.5415-.4983z" fill="rgb(245, 245, 245)"></path><circle cx="25" cy="32" fill="rgb(245, 245, 245)" r="1"></circle></svg>
            <div>
                <h1>Ops! Parece que tivemos um probleminha aqui.</h1>
                <Link style={{textDecoration: 'none'}} href="/home">
                    <p>clique aqui para voltar ao início!</p>
                </Link>
            </div>
        </div>
    );
}