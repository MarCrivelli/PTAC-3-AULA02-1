import Home from './componentes/Home';

export default async function Inicio() {
    const resposta = await fetch("http://localhost:3000/api",{next:{revalidate: 1}});
    const campus = await resposta.json();
    return (
      <div>
        <Home/>
        {
          campus.map((campi) =>
          <div class="amor">
            <p>{campi.nome_campi}</p>
            <img class="imagemRota" src={campi.imagem_url}></img>
          </div>
          )
        }
      </div>
    )
  }