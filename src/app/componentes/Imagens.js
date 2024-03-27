import Image from "next/image";
const url = "https://back-end-ifms-kappa.vercel.app/campi";
export default async function Imagens(){
    const resposta = await fetch(url, {
        cache: "no-cache",
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    });
    const campi = await resposta.json();
    return(
        <main class="blocoNomeImagens">
            {campi.map((campus) =>
          <div class="blocoImagens">
            <div class="cardImagemCampus">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
          </div>
          )}
           <h1>Imagens</h1>
        </main>
    )
}