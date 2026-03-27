import Item from "./Item/item.jsx"
import ativosMock from "../data/ativosMock"
import { useState } from "react"
import Formulario from "./Formulario/Formulario"

function ListaAtivos() {

  const [ativos, setAtivos] = useState(ativosMock)
  const [ativosEditados, setAtivosEditados] = useState(null)

  function editarAtivo(item) {
  setAtivosEditados(item) 
}

  function adicionarAtivo(dadosDoFormulario) {
    const novoAtivo = {
      id: Date.now(),
      nome: dadosDoFormulario.nome,
      tipo: dadosDoFormulario.tipo,
      status: dadosDoFormulario.status,
      unidade: dadosDoFormulario.unidade
    }

    setAtivos((ativosAtuais) => {
    return [...ativosAtuais, novoAtivo]
})
  }

  function removerAtivo(id) {
    const novosAtivos = ativos.filter(item => item.id !== id)
    setAtivos(novosAtivos)
  }

  return (
    <div>

      <Formulario adicionarAtivo={adicionarAtivo} />

      <ul>
        {ativos.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            unidade={item.unidade}
            tipo={item.tipo}
            nome={item.nome}
            status={item.status}
            remover={removerAtivo}
            editar={editarAtivo}
          />
        ))}
      </ul>

    </div>
  )
}

export default ListaAtivos