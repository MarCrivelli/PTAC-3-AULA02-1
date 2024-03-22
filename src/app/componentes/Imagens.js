import Image from "next/image";
export default async function Imagens(){
    const resposta = await fetch("https://back-end-ifms.vercel.app/campi",{next:{revalidate: 3}});
    const campi = await resposta.json();
    return(
        <main class="ama">
            {campi.map((campus) =>
          <div class="amor">
            <div class="amor2">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
            <div class="amor2">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
            <div class="amor2">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
            <div class="amor2">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
            <div class="amor2">
                <Image width={100} height={100} class="imagemRota" src={campus.image_url}/>
                <h3>{campus.nome_campus}</h3>
            </div>
          </div>
          )}
           <h1>Imagens</h1>
        </main>
    )
}