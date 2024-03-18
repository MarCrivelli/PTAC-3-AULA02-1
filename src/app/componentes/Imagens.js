export default async function Imagens(){
    const resposta = await fetch("http://localhost:3000/api",{next:{revalidate: 3}});
    const campus = await resposta.json();
    return(
        <div class="ama">
            {
          campus.map((campi) =>
          <div class="amor">
            <div class="amor2">
                <img class="imagemRota" src={campi.imagem_url}></img>
                <h3>{campi.nome_campi}</h3>
            </div>
          </div>
          )
        }
           <h1>Imagens</h1>
        </div>
    )
}